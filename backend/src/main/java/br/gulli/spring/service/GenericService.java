package br.gulli.spring.service;

import java.util.List;

import br.gulli.spring.domain.User;

public interface GenericService {
    User findByUsername(String username);

    List<User> findAllUsers();

}
