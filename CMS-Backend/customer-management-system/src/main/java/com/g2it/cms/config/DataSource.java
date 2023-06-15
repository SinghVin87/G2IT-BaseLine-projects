package com.g2it.cms.config;

import javax.persistence.EntityManagerFactory;

import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@ConfigurationProperties("spring.datasource")
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "entityManagerFactory", transactionManagerRef = "transactionManager", basePackages = {
		"com.g2it.cms.repository" })
public class DataSource extends HikariPoolConfig {
	
	@Value("${spring.entity.package}") 
	private String Entity_PACKAGE;
	
	public DataSource(HikariProperties hikariProperties) {
		super(hikariProperties);
	}

	@Bean
	public HikariDataSource dataSourceCms() {
		return new HikariDataSource(this);
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(
			final HikariDataSource dataSourceCms) {

		return new LocalContainerEntityManagerFactoryBean() {
			{
				setDataSource(dataSourceCms);
				setPersistenceProviderClass(HibernatePersistenceProvider.class);
				setPersistenceUnitName("cms");
				setPackagesToScan(Entity_PACKAGE);
				setJpaProperties(JPA_WRITE_PROPERTIES);
			}
		};
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
		return new JpaTransactionManager(entityManagerFactory);
	}
}
