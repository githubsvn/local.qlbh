<?php
class MTxCore_View_Helper_Html extends Zend_View_Helper_Abstract
{
    public function html($config = array())
    {
        return $this;
    }
	/**
	 * Generates just the option tags for an HTML select list
	 *
	 * @param	array	An array of objects
	 * @param	string	The name of the object variable for the option value
	 * @param	string	The name of the object variable for the option text
	 * @param	mixed	The key that is selected (accepts an array or a string)
	 * @returns	string	HTML for the select list
	 */

	function selectOptions( $arr, $key = 'value', $text = 'text', $selected = null )
	{
		$html = '';

		if(count($arr))
		{
			foreach ($arr as $i => $option)
			{
				$element =& $arr[$i]; // since current doesn't return a reference, need to do this
	
				$isArray = is_array( $element );
				$extra	 = '';
				if ($isArray)
				{
					$k 		= $element[$key];
					$t	 	= $element[$text];
					$id 	= ( isset( $element['id'] ) ? $element['id'] : null );
					if(isset($element['disable']) && $element['disable']) {
						$extra .= ' disabled="disabled"';
					}
				}
				elseif(is_object($element))
				{
					$k 		= $element->$key;
					$t	 	= $element->$text;
					$id 	= ( isset( $element->id ) ? $element->id : null );
					if(isset( $element->disable ) && $element->disable) {
						$extra .= ' disabled="disabled"';
					}
				}
				elseif(is_string($element) || is_numeric($element))
				{
					$k = $t = $element;
				}
	
				// This is real dirty, open to suggestions,
				// barring doing a propper object to handle it
				if ($k === '<OPTGROUP>') {
					$html .= '<optgroup label="' . $t . '">';
				} else if ($k === '</OPTGROUP>') {
					$html .= '</optgroup>';
				}
				else
				{
					//if no string after hypen - take hypen out
					$splitText = explode( ' - ', $t, 2 );
					$t = $splitText[0];
					if(isset($splitText[1])){ $t .= ' - '. $splitText[1]; }
	
					if (is_array( $selected ))
					{
						foreach ($selected as $val)
						{
							$k2 = is_object( $val ) ? $val->$key : $val;
							if ($k == $k2)
							{
								$extra .= ' selected="selected"';
								break;
							}
						}
					} else {
						$extra .= ( (string)$k == (string)$selected  ? ' selected="selected"' : '' );
					}
	
					$html .= '<option value="'. $k .'" '. $extra .'>' . $t . '</option>';
				}
			}
		}

		return $html;
	}	
	
	/**
	 * Generates an HTML select list
	 *
	 * @param	array	An array of objects
	 * @param	string	The value of the HTML name attribute
	 * @param	string	Additional HTML attributes for the <select> tag
	 * @param	string	The name of the object variable for the option value
	 * @param	string	The name of the object variable for the option text
	 * @param	mixed	The key that is selected (accepts an array or a string)
	 * @returns	string	HTML for the select list
	 */
	function selectGenericlist( $arr, $name, $attribs = null, $key = 'id', $text = 'text', $selected = NULL, $disableId = false )
	{
		$html = '';
		if(count($arr) > 0)
		{
			$id = $name;
			$id	= str_replace('[','_',$id);
			$id	= str_replace(']','',$id);
	
			if($disableId)
			{
				$html	= '<select name="'. $name .'" '. $attribs .'>';
			}
			else
			{
				$html	= '<select name="'. $name .'" id="'. $id .'" '. $attribs .'>';
			}
			$html	.= MTxCore_View_Helper_Html::selectOptions( $arr, $key, $text, $selected );
			$html	.= '</select>';
		}

		return $html;
	}
	
	//bang.ly 27-08-10
	public function checkbox($label, $name, $value = 1, $attribs = null, $selected = null, $disable=false)
	{
		$checked = '';
		if($selected) $checked = ' checked="checked" ';
		$disabledAttrib = '';
		if($disable) $disabledAttrib = ' disabled="disabled" ';
		
		$html = ' <input type="checkbox" name="' . $name . '" id="' . $name . '" value="' . $value . '" ' . $checked . $disabledAttrib . ' class="checkbox" /> ';
		$html.= ' <label for="' . $name . '" '  . $attribs . '>' . $label . '</label> ';

		return $html;
   }
}