/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')

exports.onCreateNode = ({ node, actions }) =>{
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)

        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js')
    const singleRestoranTemplate = path.resolve('src/templates/single-restoran.js')
    

    return graphql(`
    {
       blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
        ) {
            edges{
                node{
                    frontmatter{
                       title
                    }
                    fields{
                        slug  
                    }  
                }
            }
        }
        docs: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/src/pages/restorani/*.md" } }
            ) {
                edges{
                    node{
                        frontmatter{
                            title
                        }
                        fields{
                            slug  
                        }  
                    }
                }
            }
    }
    `).then(result => {
       
        if(result.errors){
             Promise.reject(result.errors)
          
        }
        

        // Create doc pages
		result.data.docs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
                component: singleRestoranTemplate,
                context: {
                    slug: node.fields.slug
                }

			});
        });
		// Create blog pages
		result.data.blogs.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    slug: node.fields.slug
                }

			});
		});
	});
};
