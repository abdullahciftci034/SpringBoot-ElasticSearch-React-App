package com.abdullah.springbootelasticsearch.repository;

import com.abdullah.springbootelasticsearch.entity.User;
import java.util.List;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends ElasticsearchRepository<User, String> {

    @Query("{\"bool\": {\"should\": [{\"match\": {\"name\": \"*?0*\"}}, {\"match\": {\"surname\": \"*?1*\"}}, {\"match\": {\"address\": \"*?2*\"}}]}}")
    List<User> getByCustomQuery(String name, String surname, String address);
    
    
    List<User>  findByNameLikeOrSurnameLikeOrAddressLike(String name, String surname, String address);
}
