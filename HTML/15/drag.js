var drag = function(target, event)
{
    // ���忪ʼ�϶�ʱ�����λ�ã����window���꣩
    var startX = event.clientX;
    var startY = event.clientY;
    // ���彫Ҫ���϶�Ԫ�ص�λ�ã������document���꣩
    // ��Ϊ��target��positionΪabsolutely��
    // ���Կ���Ϊ��������ϵ�ǻ���document��
    var origX = target.offsetLeft;
    var origY = target.offsetTop;
    // ��Ϊ�������event��clientX��clientY����ȡ���λ��ʱ��
    // ֻ�ܻ�ȡwindows����ϵ��λ�ã�������Ҫ����window����ϵ
    // ��document����ϵ��ƫ�ơ�
    // ����windows����ϵ��document����ϵ֮���ƫ��
    var deltaX = startX - origX;
    var deltaY = startY - origY;
    // ����ɿ����¼�������
    var upHandler = function(evt)
    {
        // ��IE 8�������IE������л�ȡ�¼�����
        if (!evt) evt = window.event;
        // ȡ�����϶����������ƶ���mousemove��������ɿ���mouseup�����¼�������
        if (document.removeEventListener)
        {
            // ȡ�����¼�����׶ε��¼�������
            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);
        }
        // ��IE 8�������IE�������ȡ���¼�������
        else if (document.detachEvent)
        {
            target.detachEvent("onlosecapture", upHandler);
            target.detachEvent("onmouseup", upHandler);
            target.detachEvent("onmousemove", moveHandler);
            target.releaseCapture( );
        }
        // ��ֹ�¼�����
        stopProp(evt);
    }
    // ��ֹ�¼��������ú������Կ��������
    var stopProp = function(evt)
    {
        // ���֧��stopPropagation���������øú���ȡ������
        if (evt.stopPropagation)
        {
            evt.stopPropagation();
        }
        // ����IE 8�������IE�����
        else
        {
            // ����cancelBubbleȡ��ð��
            evt.cancelBubble = true;
        }
    }
    // Ϊ���϶����������ƶ���mousemove��������ɿ���mouseup��ע���¼�������
    if (document.addEventListener)
    {
        // ���¼�����׶ΰ��¼�������
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
    }
    else if (document.attachEvent)
    {
        // ��IE 8�������IE������У����ø�Ԫ��ֱ�Ӳ�����¼�
        target.setCapture();
        // Ϊ��Ԫ������ƶ�ʱ���¼�������
        target.attachEvent("onmousemove", moveHandler);
        // Ϊ����ɿ�ʱ���¼�������
        target.attachEvent("onmouseup", upHandler);
        // ��ʧȥ�����¼���������ɿ�����
        target.attachEvent("onlosecapture", upHandler);
    }
    // ��ֹ�¼�����
    stopProp(event);
    // ���������ȡ���¼�Ĭ����Ϊ
    if (event.preventDefault)
    {
        // ȡ��Ĭ����Ϊ
        event.preventDefault( );
    }
    else
    {
        // ��IE 8�������IE�������ȡ���¼���Ĭ����Ϊ
        event.returnValue = false;
    }
    // ����ƶ����¼�������
    function moveHandler(evt)
    {
        // ��IE 8�������IE������л�ȡ�¼�����
        if (!evt) evt = window.event;
        // �����϶�Ԫ�ص�λ���ƶ�����ǰ���λ�á�
        // �Ƚ�window����ϵλ��ת����document����ϵλ�ã����޸�Ŀ������CSSλ�á�
        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltaY) + "px";
        // ��ֹ�¼�����
        stopProp(evt);
    }
}