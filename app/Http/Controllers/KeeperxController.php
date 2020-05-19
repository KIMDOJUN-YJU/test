<?php

namespace App\Http\Controllers;

use App\Keeper;
use App\Kstoreinfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class KeeperxController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
       //
       $json = \App\Keeper::all();
       return json_encode($json, JSON_UNESCAPED_UNICODE);
  }


  public function storeshow($id)
  {
    $storeshow = DB::table('kstoreinfos')->where('keeper_id',$id)->get();
    return json_encode($storeshow, JSON_UNESCAPED_UNICODE);
  }
  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      // //

  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
      $json = \App\Keeper::create([
          'keeper_name'=>$request->keeper_name,
          'keeper_password'=>$request->keeper_password,
          'keeper_email'=>$request->keeper_email,
          'keeper_phonenumber'=>$request->keeper_phonenumber,
      ]);
      if($json){
          return json_encode('Insert seccessfully');
      }else{
          return json_encode('Insert field');
      }

  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
      //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
      //
      // $question = \App\Question::find($id);

      // return view('view.register', compact('question'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
      $json = \App\Keeper::find($id)->update([
        'keeper_name'=>$request->keeper_name,
        'keeper_password'=>$request->keeper_password,
        'keeper_email'=>$request->keeper_email,
        'keeper_phonenumber'=>$request->keeper_phonenumber,
      ]);
      if($json){
          return json_encode('Insert seccessfully');
      }else{
          return json_encode('Insert field');
      }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
      //
      $json = \App\Keeper::destroy($id);

      return json_encode('Destroy seccessfully');
  }

  public function register(Request $request)
  {
      $validator = Validator::make($request->json()->all() , [
          'keeper_name' => 'required|string|max:255',
          'keeper_email' => 'required|string|email|max:255|unique:keepers',
          'keeper_password' => 'required|string|min:6',
          'keeper_phonenumber' => 'required|string|min:11', 
      ]);

      if($validator->fails()){
              return response()->json($validator->errors()->toJson(), 400);
      }

      $keeper = Keeper::create([
          'keeper_name' => $request->json()->get('keeper_name'),
          'keeper_email' => $request->json()->get('keeper_email'),
          'keeper_phonenumber' => $request->json()->get('keeper_phonenumber'),
          'keeper_password' => $request->json()->get('keeper_password'),
      ]);

      $token = JWTAuth::fromUser($keeper);

      return response()->json(compact('keeper','token'),201);
  }
  
  public function login(Request $request)
  {
      $credentials = $request->json()->all();

      try {
          if (! $token = JWTAuth::attempt($credentials)) {
              return response()->json(['error' => 'invalid_credentials'], 400);
          }
      } catch (JWTException $e) {
          return response()->json(['error' => 'could_not_create_token'], 500);
      }

      return response()->json( compact('token') );
  }

  

  public function getAuthenticatedKeeper()
  {
      try {
          if (! $keeper = JWTAuth::parseToken()->authenticate()) {
              return response()->json(['user_not_found'], 404);
          }
      } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
          return response()->json(['token_expired'], $e->getStatusCode());
      } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
          return response()->json(['token_invalid'], $e->getStatusCode());
      } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
          return response()->json(['token_absent'], $e->getStatusCode());
      }
      return response()->json(compact('keeper'));
  }

}
