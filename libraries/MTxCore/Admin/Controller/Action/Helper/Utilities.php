<?php
class MTxCore_Admin_Controller_Action_Helper_Utilities extends Zend_Controller_Action_Helper_Abstract
{
    public function alias($text)
    {
        $marTViet   =   array(
            '\\','/','.',' ',"Ã ","Ã¡","áº¡","áº£","Ã£","Ã¢","áº§","áº¥","áº­","áº©","áº«","Äƒ",
    		"áº±","áº¯","áº·","áº³","áºµ","Ã¨","Ã©","áº¹","áº»","áº½","Ãª","á»�"
    		,"áº¿","á»‡","á»ƒ","á»…",
    		"Ã¬","Ã­","á»‹","á»‰","Ä©",
    		"Ã²","Ã³","á»�","á»�","Ãµ","Ã´","á»“","á»‘","á»™","á»•","á»—","Æ¡"
    		,"á»�","á»›","á»£","á»Ÿ","á»¡",
    		"Ã¹","Ãº","á»¥","á»§","Å©","Æ°","á»«","á»©","á»±","á»­","á»¯",
    		"á»³","Ã½","á»µ","á»·","á»¹",
    		"Ä‘",
    		"Ã€","Ã�","áº ","áº¢","Ãƒ","Ã‚","áº¦","áº¤","áº¬","áº¨","áºª","Ä‚"
    		,"áº°","áº®","áº¶","áº²","áº´",
    		"Ãˆ","Ã‰","áº¸","áºº","áº¼","ÃŠ","á»€","áº¾","á»†","á»‚","á»„",
    		"ÃŒ","Ã�","á»Š","á»ˆ","Ä¨",
    		"Ã’","Ã“","á»Œ","á»Ž","Ã•","Ã”","á»’","á»�","á»˜","á»”","á»–","Æ "
    		,"á»œ","á»š","á»¢","á»ž","á» ",
    		"Ã™","Ãš","á»¤","á»¦","Å¨","Æ¯","á»ª","á»¨","á»°","á»¬","á»®",
    		"á»²","Ã�","á»´","á»¶","á»¸",
    		"Ä�"
		);
		
		$marKoDau =   array(
    		'-','-','','-',"a","a","a","a","a","a","a","a","a","a","a"
    		,"a","a","a","a","a","a",
    		"e","e","e","e","e","e","e","e","e","e","e",
    		"i","i","i","i","i",
    		"o","o","o","o","o","o","o","o","o","o","o","o"
    		,"o","o","o","o","o",
    		"u","u","u","u","u","u","u","u","u","u","u",
    		"y","y","y","y","y",
    		"d",
    		"A","A","A","A","A","A","A","A","A","A","A","A"
    		,"A","A","A","A","A",
    		"E","E","E","E","E","E","E","E","E","E","E",
    		"I","I","I","I","I",
    		"O","O","O","O","O","O","O","O","O","O","O","O"
    		,"O","O","O","O","O",
    		"U","U","U","U","U","U","U","U","U","U","U",
    		"Y","Y","Y","Y","Y",
    		"D"
		);
		$alias	=	str_replace($marTViet, $marKoDau, trim($text));
		return $alias;
    }
	/**
	 * Utility function to sort an array of objects on a given field
	 *
	 * @static
	 * @param	array	$arr		An array of objects
	 * @param	string	$k			The key to sort on
	 * @param	int		$direction	Direction to sort in [1 = Ascending] [-1 = Descending]
	 * @return	array	The sorted array of objects
	 * @since	1.5
	 */
	public function sortObjects( &$a, $k, $direction=1 )
	{
		$GLOBALS['JAH_so'] = array(
			'key'		=> $k,
			'direction'	=> $direction
		);
		usort( $a, array('JArrayHelper', '_sortObjects') );
		unset( $GLOBALS['JAH_so'] );

		return $a;
	}
	/**
	 * Private callback function for sorting an array of objects on a key
	 *
	 * @static
	 * @param	array	$a	An array of objects
	 * @param	array	$b	An array of objects
	 * @return	int		Comparison status
	 * @since	1.5
	 * @see		JArrayHelper::sortObjects()
	 */
	private function _sortObjects( &$a, &$b )
	{
		$params = $GLOBALS['JAH_so'];
		if ( $a->$params['key'] > $b->$params['key'] ) {
			return $params['direction'];
		}
		if ( $a->$params['key'] < $b->$params['key'] ) {
			return -1 * $params['direction'];
		}
		return 0;
	}
	/**
	 * Gets the extension of a file name
	 *
	 * @param string $file The file name
	 * @return string The file extension
	 */
	public function getext($file) {
		$dot = strrpos($file, '.') + 1;
		return substr($file, $dot);
	}
}

?>