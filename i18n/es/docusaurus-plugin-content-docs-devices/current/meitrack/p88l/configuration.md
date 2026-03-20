---
slug: /meitrack/p88l/configuration
id: p88l-configuration
sidebar_label: Configuration
title: Meitrack - P88L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Meitrack P88L con ajustes de servidor Plaspy, comandos SMS y pasos prácticos de integración
keywords:
  - configuración Meitrack P88L
  - instalación Meitrack P88L
  - configuración P88L Plaspy
  - configuración rastreador GPS P88L
  - configuración servidor Plaspy
  - comandos SMS P88L
  - integración rastreador Meitrack
  - configuración plataforma rastreadores GPS
  - configuración rastreador personal
  - compatibilidad Plaspy
---

# Meitrack - P88L Configuración

Esta página documenta el contexto público de configuración para usar el Meitrack P88L con la plataforma Plaspy. Reúne los ajustes de servidor esenciales, pasos prácticos habituales y ejemplos de comandos SMS que se usan comúnmente para apuntar un P88L a Plaspy y así habilitar el seguimiento en vivo y la entrega de alertas.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en las acciones comunes y los comandos públicos usados para la integración, recomendando siempre la verificación con la documentación de Meitrack.

## Resumen de la configuración

Esta configuración prepara el P88L para enviar datos de ubicación y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Los ejemplos de comandos que siguen muestran el método típico basado en SMS para establecer el servidor GPRS, el intervalo de reporte, la zona horaria y las opciones de eventos para la integración con Plaspy.

- Configurar el rastreador para que informe al endpoint del servidor Plaspy y así las ubicaciones y alertas aparezcan en la plataforma.
- Verificar que los ajustes GPRS y APN sean correctos para la SIM del dispositivo y que las sesiones de datos se establezcan.
- Establecer un intervalo de reporte que equilibre la frecuencia de actualización y la duración de la batería según el caso de uso.
- Validar la zona horaria y la notificación de eventos para que las marcas temporales y alertas sean precisas en Plaspy.
- Confirmar que el dispositivo se registre y transmita a Plaspy antes de desplegarlo definitivamente.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so the platform accepts supported tracker protocols sent to the shared endpoint

## Requisitos habituales antes de la configuración

- Un dispositivo P88L cargado con una tarjeta SIM activa que soporte datos y SMS para la configuración y el reporte.
- Acceso al método de configuración Meitrack que vaya a utilizar, por ejemplo comandos SMS, la aplicación del fabricante o la herramienta del proveedor.
- Conocimiento del APN de la SIM y, si aplica, del usuario y contraseña del APN; en los comandos a continuación aparecen como [apn], [apnu] y [apnp].
- La contraseña del dispositivo para los comandos SMS si está configurada; los ejemplos públicos usan la contraseña por defecto 0000 según la documentación del fabricante.
- Un lugar seguro para probar la conectividad donde el rastreador pueda obtener fijaciones GNSS y establecer una sesión de datos móviles para validar el funcionamiento.

## Cómo se conecta este rastreador a Plaspy

El P88L se configura para enviar mensajes de ubicación, telemetría y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunta a Plaspy (por dominio o IP) y se define el transporte y el APN correctos, Plaspy recibirá e interpretará automáticamente los mensajes del rastreador mediante su detección de protocolo.

- El rastreador transmite datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte si el dispositivo requiere elegir; Plaspy acepta cualquiera de los dos.
- Plaspy detecta automáticamente el protocolo del rastreador para poder procesar los reportes del P88L.
- Los eventos y alertas del dispositivo, como SOS, se reenvían a Plaspy para notificación al operador y registro histórico.
- Tras una configuración exitosa, el dispositivo será visible en los paneles de Plaspy y se podrá validar la actualización de la telemetría en vivo.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Meitrack que planea usar, como comandos SMS, la app del fabricante o la herramienta del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP como transporte si el rastreador requiere una selección de protocolo.
5. Proporcione el APN correcto y cualquier usuario o contraseña del APN necesaria para la SIM usando el método de configuración del dispositivo.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere o si el fabricante lo recomienda.
7. Valide que el dispositivo informe a Plaspy comprobando mensajes iniciales y la ubicación en vivo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El P88L puede configurarse enviando comandos SMS desde un número autorizado. Los siguientes comandos públicos de ejemplo están ordenados según el uso típico. La contraseña del dispositivo en estos ejemplos es 0000, que es la predeterminada en el conjunto de comandos públicos.

1. Comando opcional de restauración de fábrica o configuración inicial
```sms
0000,F11
```
- Use esto solo si desea restaurar los valores de fábrica durante la configuración inicial. Etiquete este paso como opcional y ejecútelo únicamente si es necesario.

2. Establecer el servidor GPRS y el APN para Plaspy
```sms
0000,A21,2,54.85.159.138,8888,[apn]
```
- Alternativa usando el dominio del servidor:
```sms
0000,A21,2,d.plaspy.com,8888,[apn]
```
- Si su operador requiere usuario y contraseña de APN inclúyalos como campos adicionales separados por comas:
```sms
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Explicación de los marcadores:
  - [apn] es el APN de su proveedor de SIM
  - [apnu] es el usuario del APN si es requerido
  - [apnp] es la contraseña del APN si es requerida

3. Ajustar la zona horaria a UTC 0
```sms
0000,B36,0
```
- Modifique el valor de zona horaria si necesita un desfase diferente según la documentación de Meitrack.

4. Establecer el intervalo de actualización/reporte a 1 minuto
```sms
0000,A12,6,0
```
- Este comando fija un intervalo frecuente de reporte; adapte los parámetros al intervalo requerido para su despliegue.

5. Configurar las opciones de notificación de eventos
```sms
0000,C03,0
```
- Configure la notificación de eventos según sus necesidades de monitoreo. Consulte la documentación de Meitrack para el significado de parámetros específicos.

Nota: Mantenga el orden de comandos siguiendo la guía del fabricante. Reemplace los campos de marcador por los valores de APN de su operador antes de enviar los SMS.

## Notas de configuración

- Las variantes de firmware y de hardware regional pueden modificar la sintaxis y los parámetros admitidos; confirme siempre el formato de los comandos con la documentación de Meitrack para su variante de dispositivo.
- La configuración por SMS es de uso común en el P88L, pero el software del fabricante o las herramientas del proveedor pueden ofrecer alternativas por lote o por USB.
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Verifique el APN, el acceso a datos de la SIM y cualquier restricción del operador antes de desplegar el rastreador para asegurar que pueda establecer sesiones GPRS hacia el endpoint de Plaspy.
- La contraseña SMS por defecto en los ejemplos públicos es 0000; si cambia la contraseña, regístrela de forma segura y use la contraseña actualizada al enviar comandos SMS.

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack P88L para que reporte a Plaspy brinda a cuidadores, supervisores y equipos operativos visibilidad consistente de ubicaciones, alertas y telemetría básica. El endpoint compartido de Plaspy simplifica el alta de dispositivos en distintos modelos porque la plataforma usa el mismo puerto y detecta protocolos automáticamente, reduciendo la carga de configurar servidores por dispositivo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para pasos de configuración específicos más actuales, notas de firmware y sintaxis de comandos verifique los detalles con el fabricante en https://www.meitrack.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
