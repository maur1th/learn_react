/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page_not_found.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tbouder <tbouder@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/10/03 22:44:40 by tbouder           #+#    #+#             */
/*   Updated: 2016/10/06 14:04:29 by tbouder          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React	from 'react';
import {Link}	from 'react-router';

export default class page_not_found extends React.Component
{
	render()
	{
		return (
			<div>
				<div className="text_center padding_two">
					<h1> 404 </h1>
					<h2>Page not found!</h2>
				</div>

				<div className="text_center padding_two">
					<Link to = "/">
						<button className="ui labeled icon button">
							<i className="hand spock icon"></i>
							Let's go to the Home page
						</button>
					</Link>
					<Link to = "/count">
						<button className="ui labeled icon button">
							<i className="plus icon"></i>
							Let's go to the counter page
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
