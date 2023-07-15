package com.abdullah.springbootelasticsearch.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abdullah.springbootelasticsearch.entity.User;
import com.abdullah.springbootelasticsearch.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*") 
public class UserController  {
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/save")
	public User savekisi(@RequestBody User user) {
		return userRepository.save(user); 
	}
	@GetMapping("/start")
	public User start() {
		User user1=new  User();
		user1.setName("abdullah");
		user1.setSurname("çiftçi");
		user1.setAddress("Tokat");
		user1.setDateofbirth("12.04.1996");
		return userRepository.save(user1); 
	}
		
    @GetMapping("/list")
    public Iterable<User> getUserList() {
      return userRepository.findAll();
    }
    
    @PostMapping("/searchUser")
    public Iterable<User> getUsers(@RequestBody String search) {
	 return userRepository.findByNameLikeOrSurnameLikeOrAddressLike(search, search,search);
    }
	@PostMapping("/searchUser1")
    public Iterable<User> getUserss(@RequestBody String search) {
	 return userRepository.getByCustomQuery(search,search,search);
    }
}
