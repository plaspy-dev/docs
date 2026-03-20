---
slug: /topshine/vt900/configuration
id: vt900-configuration
sidebar_label: Configuration
title: TopShine - VT900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador TopShine VT900 a los servidores de Plaspy por SMS o GPRS
keywords:
  - Configuración TopShine VT900
  - Configuración VT900
  - Configuración rastreador GPS TopShine
  - Configuración VT900 Plaspy
  - Rastreo de vehículos VT900
  - Configuración servidor rastreador GPS
  - Gestión de flotas VT900
  - Configuración GPRS VT900
  - Comandos SMS rastreador TopShine
  - Configuración rastreador Plaspy
---

# TopShine - Configuración del VT900

Esta página reúne los ajustes públicos y ejemplos de comandos SMS necesarios para configurar el rastreador TopShine VT900 y que reporte ubicación y estado a la plataforma Plaspy. Aquí encontrará los parámetros prácticos y las plantillas de SMS que se suelen usar para apuntar el VT900 a los servidores públicos de Plaspy.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT900 permite configuración por SMS y por GPRS (TCP/UDP); los ejemplos a continuación muestran las plantillas de SMS documentadas públicamente para la configuración inicial.

## Resumen de la configuración

El proceso de configuración prepara el VT900 para comunicarse de forma fiable con Plaspy y así lograr que la plataforma reciba posiciones y eventos. Normalmente se cubren la configuración del servidor y del APN, la selección del transporte y la verificación de que el dispositivo informe correctamente.

- Configure el VT900 para que apunte al endpoint y puerto de Plaspy y así dirigir los datos a la plataforma.  
- Ajuste el APN y el modo GPRS del dispositivo para que pueda establecer sesión de datos móviles.  
- Seleccione el transporte (UDP o TCP) si el equipo requiere una opción explícita y confirme que el puerto sea el correcto.  
- Valide la conectividad comprobando que el dispositivo informe y usando el comando de consulta de IMEI para confirmar la identidad del equipo.  
- Guarde y aplique los cambios, luego verifique la visibilidad en Plaspy para que los vehículos y las alertas aparezcan en la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and all devices use the same port for communication

Estos son los valores públicos de configuración de Plaspy que el VT900 debe usar cuando se configure para reportar por GPRS.

## Requisitos típicos antes de comenzar

- Un equipo VT900 con alimentación y cableado instalado según la guía del instalador.  
- Una SIM celular funcional que soporte datos GPRS y SMS para la configuración inicial por SMS.  
- Tener a mano el número IMEI del dispositivo (suele venir en la etiqueta o puede consultarse vía SMS).  
- Conocer la contraseña del dispositivo; los ejemplos públicos de SMS usan la contraseña por defecto 000000.  
- Acceso a la documentación del fabricante o a la herramienta de configuración del VT900 para verificar la sintaxis de comandos y el comportamiento del firmware.  
- Un procedimiento de prueba para comprobar que el dispositivo reporte a Plaspy después de aplicar los ajustes, por ejemplo verificando la presencia del IMEI en la plataforma o la recepción de actualizaciones de ubicación.

## Cómo se conecta este rastreador a Plaspy

El VT900 puede enviar datos de ubicación y eventos a Plaspy por GPRS usando TCP o UDP. Al configurar los parámetros del servidor de Plaspy, el rastreador establece una sesión de datos con el endpoint de Plaspy y comienza a enviar reportes según el intervalo y las reglas de evento configuradas.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).  
- Plaspy detecta automáticamente el protocolo del rastreador, de modo que la plataforma interpreta los mensajes entrantes sin necesidad de seleccionar el protocolo manualmente en el servidor.  
- El VT900 puede reportar de forma periódica o en base a eventos, de modo que las ubicaciones y alertas queden disponibles en Plaspy para monitoreo y reproducción histórica.  
- Los elementos típicos reportados incluyen actualizaciones de posición y eventos soportados por el VT900; estos datos son visibles en Plaspy una vez que el rastreador se conecta correctamente.  
- Use la plataforma para confirmar la visibilidad del dispositivo y para monitorear el estado de conectividad después de la configuración.

## Flujo típico de configuración

1. Consulte el método oficial de configuración del TopShine VT900 o la documentación del fabricante; elija SMS o la herramienta del proveedor según su entorno.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el área de configuración de servidor del dispositivo.  
3. Ajuste el puerto del equipo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Seleccione UDP o TCP si el VT900 requiere una elección explícita de transporte para GPRS.  
5. Configure el APN del dispositivo y, si procede, el usuario y la contraseña del APN para la SIM del rastreador para habilitar GPRS.  
6. Aplique o guarde la configuración y reinicie el equipo si el VT900 o la guía del fabricante solicita un reinicio.  
7. Valide que el dispositivo reporte a Plaspy comprobando en la plataforma la presencia del IMEI y la recepción de posiciones, o mediante el comando SMS de consulta de IMEI.

## Ejemplos de comandos de configuración

El VT900 soporta configuración por SMS usando la contraseña del dispositivo y la sintaxis de comandos por SMS. A continuación se muestran las plantillas públicas de comandos SMS según la documentación del fabricante. Los ejemplos usan la contraseña por defecto 000000 en las plantillas. Reemplace los marcadores por los valores reales según corresponda.

- Optional initial factory reset (use only when needed):
```text
W000000,990,099###
```

- Set the device ID (replace {{IMEI_FIRST14}} with the first 14 digits of the device IMEI; Plaspy typically uses the full 15-digit IMEI as the device identifier on the platform):
```text
W000000,010,{{IMEI_FIRST14}}
```

- Set the operator APN. Replace [apn] with your SIM operator APN. If the APN requires username and password, append ,[apnu],[apnp]:
```text
W000000,011,[apn]            (or) W000000,011,[apn],[apnu],[apnp]
```
Explicación: [apn] es la cadena APN de la red móvil. [apnu] y [apnp] son opciones para usuario y contraseña del APN.

- Set the GPRS server to the Plaspy public server IP and port:
```text
W000000,012,54.85.159.138,8888
```
Nota: Si su VT900 admite nombres de dominio, también puede introducir d.plaspy.com en la configuración del dispositivo según el conjunto de comandos o la interfaz de configuración del rastreador.

- Switch the device to GPRS mode:
```text
W000000,013,2
```

- Set the reporting update interval (example uses value 6; consult the device manual to confirm the meaning of interval values):
```text
W000000,014,6
```

- Query the device IMEI (verification command):
```text
W000000,601
```

Envíe estos comandos por SMS desde un número autorizado y reemplace los marcadores con sus valores reales. Mantenga segura la contraseña del dispositivo (por defecto 000000) y cámbiela si su política de seguridad lo requiere.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden modificar la sintaxis de comandos o las opciones disponibles; verifique siempre la estructura exacta en el manual del VT900 correspondiente a su versión de firmware.  
- El VT900 permite configuración por SMS y por GPRS; los comandos SMS son útiles para ajustes remotos o en campo cuando el acceso físico es limitado.  
- Al elegir entre TCP y UDP, revise el comportamiento del firmware del dispositivo y su entorno de red; ambos transportes son soportados por Plaspy en el puerto 8888.  
- Confirme el APN correcto y las credenciales del APN con su operador antes de poner el rastreador en modo GPRS.  
- Si utiliza el comando de restaura de fábrica, téngalo como opcional y ejecútelo solo cuando sea necesario durante el aprovisionamiento inicial o la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine VT900 para que reporte a Plaspy permite a las organizaciones centralizar ubicaciones de vehículos y eventos en una sola plataforma. Con el VT900 informando regularmente al endpoint compartido de Plaspy, los administradores de flota obtienen visibilidad en la plataforma para monitoreo, alertas y seguimiento histórico.

Más información sobre Plaspy en el sitio principal https://www.plaspy.com y verifique pasos específicos del dispositivo, comportamiento del firmware y detalles del fabricante en el sitio oficial de TopShine https://www.gztopshine.com/ para asegurarse de que las instrucciones correspondan con su revisión de equipo y versión de firmware.
