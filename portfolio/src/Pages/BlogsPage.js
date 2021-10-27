import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../data/blogs';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Blogs'} span={''} />
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog)=>{
                            return (
                              <div key={blog.id} className={"blog-item"}>
                                <div className="image">
                                  <a
                                    href="https://medium.com/@ananthuasokkumar/joy-of-my-first-react-project-ixigo-com-clone-fe5416ec57d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img src={blog.image} alt="" />
                                  </a>
                                </div>
                                <div className="title">
                                  <a
                                    href="https://medium.com/@ananthuasokkumar/joy-of-my-first-react-project-ixigo-com-clone-fe5416ec57d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {blog.title}
                                  </a>
                                </div>
                              </div>
                            );
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      text-align: center;
      a {
        font-size: 1.5rem;
        padding: 2rem 0;
        color: var(--font-light-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage
