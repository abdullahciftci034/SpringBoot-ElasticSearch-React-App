import React ,{ useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import List from "./components/List";
import SaveUser from './components/SaveUser';
import Search from './components/Search';
import Search1 from './components/Search1';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {  
  return (
    <div >
      <nav>
        <section>
          <div className="container-fluid text-center fs-2">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/">Home</Link>
              </div>
              <div className="col-lg-6">
                <Link to="/fakes"> Fake data ekle</Link>
              </div>
            </div>
          </div>
        </section>
      </nav>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 border border-2">
                <p className="fs-3">1. Page User List</p>
                <List/>
            </div>
            <div className="col-lg-3 border border-2">
                <p className="fs-3">2. Page User save</p>
                <SaveUser/>
            </div>
            <div className="col-lg-3 border border-2" >
                <p className="fs-3">3. Page  Spring Data JPA'nın sağladığı dinamik sorgu</p>
                <Search/>
            </div>
            <div className="col-lg-3 border border-2">
                <p className="fs-3">4. Page Elastic Search @Query anotasyonu ile özelleştirilmiş bir Elasticsearch sorgu</p>
                <Search1/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}