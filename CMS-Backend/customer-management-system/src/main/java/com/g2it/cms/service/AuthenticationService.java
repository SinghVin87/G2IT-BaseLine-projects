package com.g2it.cms.service;

import com.g2it.cms.entity.SessionData;
import com.g2it.cms.entity.User;
import com.g2it.cms.model.CredentialsPayload;
import com.g2it.cms.model.Tokens;

public interface AuthenticationService {

	public Tokens login(CredentialsPayload cp);

	public User findUserByUserName(String UserName);

	public SessionData findByToken();

	public Tokens refreshToken();

}
