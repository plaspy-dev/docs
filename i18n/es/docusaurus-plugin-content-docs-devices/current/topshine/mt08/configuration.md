---
slug: /topshine/mt08/configuration
id: mt08-configuration
sidebar_label: Configuration
title: TopShine - MT08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine MT08 y su integración con Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración TopShine MT08
  - Configuración TopShine MT08 para Plaspy
  - Configuración rastreador GPS MT08
  - Configuración servidor MT08
  - Configuración rastreador para motocicleta TopShine
  - Comandos SMS MT08
  - Configuración APN MT08
  - MT08 GPRS TCP UDP
  - Integración MT08 con Plaspy
  - Configuración rastreador GPS Plaspy
---

# TopShine - MT08 Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopShine MT08 con Plaspy. Reúne los ajustes prácticos de servidor, los requisitos típicos y los comandos de configuración por SMS disponibles públicamente que instaladores e integradores usan para apuntar un MT08 a la plataforma Plaspy. El MT08 es un rastreador compacto enfocado en motocicletas que admite conectividad 4G/2G por SIM, así como modos de reporte por SMS y GPRS; esta guía se basa en ese comportamiento público para los pasos de integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Los comandos de ejemplo que siguen provienen de contenido público de configuración del dispositivo y muestran el estilo de configuración por SMS que se usa a menudo con el MT08; siempre verifique los comandos y la sintaxis exacta en la documentación de TopShine para el firmware de su equipo.

## Resumen de la configuración

Configurar el MT08 para Plaspy hace que el dispositivo envíe ubicación y estado al punto de conexión compartido de Plaspy, de modo que la unidad sea visible en su panel de Plaspy y reciba eventos y alertas de la plataforma. El proceso normalmente incluye preparar el equipo, proporcionar los datos APN del operador, seleccionar el modo de transporte si corresponde y guardar o aplicar la configuración para que el rastreador comience a enviar datos.

- Apuntar el dispositivo para que use Plaspy como su endpoint GPRS y así los reportes lleguen a la plataforma.
- Ingresar el APN del operador y opcionalmente el usuario y la contraseña del APN para que la SIM pueda conectarse.
- Elegir TCP o UDP según lo requiera la instalación y el firmware del equipo.
- Validar la conectividad confirmando que el dispositivo se registre en Plaspy y envíe actualizaciones de posición.
- Usar comandos SMS para la configuración in situ o la herramienta de configuración del proveedor cuando esté disponible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte UDP o TCP (el MT08 puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad MT08 con alimentación, con batería de respaldo cargada o conectada a la alimentación del vehículo.
- Una tarjeta SIM activa instalada y con capacidad de usar datos GPRS para el operador de su región.
- El APN del operador y las credenciales del APN (usuario y contraseña) si el plan de la SIM lo requiere.
- Acceso al método de configuración por SMS de TopShine o a la herramienta de configuración del proveedor para este modelo.
- El IMEI del dispositivo disponible para identificación y creación del registro del equipo.
- Un medio para enviar y recibir SMS hacia y desde el dispositivo desde el teléfono del instalador si se usan comandos SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MT08 envía mensajes de posición GPS y estado al endpoint y puerto compartidos de Plaspy usando el transporte seleccionado. Plaspy procesa esos mensajes y los asocia al registro de dispositivo correspondiente para que la ubicación, las alarmas y la telemetría sean visibles en la plataforma.

- El MT08 se apunta al endpoint o IP del servidor Plaspy y al puerto de reporte para que los datos fluyan directamente a Plaspy.
- El rastreador utiliza reportes por GPRS (TCP o UDP) o SMS como alternativa para la entrega de mensajes.
- Plaspy determina automáticamente el protocolo del dispositivo cuando el rastreador se conecta a la plataforma.
- Eventos reportados como movimiento, SOS, pérdida de energía y actualizaciones periódicas de ubicación se vuelven visibles en Plaspy.
- Tras la configuración, el dispositivo debería empezar a aparecer en la interfaz de Plaspy cuando se registre.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración TopShine para el MT08, normalmente mediante comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese la información del servidor Plaspy especificando d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto de reporte en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el MT08 requiere seleccionar el modo de transporte.
5. Proporcione el APN del operador y, si la SIM lo requiere, el usuario y la contraseña del APN.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el dispositivo o el procedimiento lo requieren.
7. Valide que el MT08 reporte a Plaspy comprobando que el dispositivo aparezca y se actualice en la plataforma Plaspy.

## Comandos de configuración de ejemplo

A continuación se muestran plantillas de comandos SMS disponibles públicamente extraídas del contenido de configuración del TopShine MT08. La contraseña de ejemplo del dispositivo usada en estos comandos es 000000 y se muestra como el valor por defecto donde corresponde. Mantenga el orden cuando realice una configuración inicial en la que el orden esté especificado.

- Restablecer a configuración de fábrica (paso inicial opcional)
  
  Descripción: Restablece la configuración del dispositivo a los valores de fábrica. Use solo cuando sea necesario durante la configuración inicial.
  ```
  W000000,990,099###
  ```

- Establecer el ID del dispositivo
  
  Descripción: Definir el identificador del dispositivo. La plantilla del fabricante utiliza los primeros 14 dígitos del IMEI para el campo de id en el rastreador. Tenga en cuenta que Plaspy usa el IMEI completo de 15 dígitos como identificador del dispositivo en la plataforma.
  ```
  W000000,010,\<first 14 digits of IMEI>
  ```

- Establecer el APN del operador
  
  Descripción: Configurar el APN del operador y, opcionalmente, el usuario y la contraseña del APN. Reemplace [apn] con el APN de su operador. Si es necesario, incluya [apnu] y [apnp] para el usuario y la contraseña del APN.
  ```
  W000000,011,[apn][,[apnu],[apnp]]
  ```
  Nota: Use la forma separada por comas e incluya los campos opcionales de usuario y contraseña del APN solo cuando su operador lo requiera.

- Apuntar el servidor GPRS a Plaspy por IP y puerto
  
  Descripción: Apuntar el rastreador a la IP y puerto del servidor Plaspy usados para todos los dispositivos.
  ```
  W000000,012,54.85.159.138,8888
  ```

- Cambiar el dispositivo al modo de reporte GPRS
  
  Descripción: Configurar el modo de reporte para usar GPRS (requerido para reportes TCP/UDP).
  ```
  W000000,013,2
  ```

- Establecer el intervalo de actualización
  
  Descripción: Configurar el intervalo de reporte de ubicación. El valor de ejemplo mostrado es 6 (la interpretación depende del firmware del dispositivo).
  ```
  W000000,014,6
  ```

- Consultar IMEI del dispositivo
  
  Descripción: Use este comando para solicitar el IMEI del dispositivo por SMS para verificación.
  ```
  W000000,601
  ```

Mantenga los marcadores de posición como [apn], [apnu] y [apnp] al reemplazarlos por los valores de su operador. La contraseña por defecto del dispositivo en los ejemplos es 000000; si la contraseña del dispositivo ha sido cambiada, use la contraseña actual en lugar de 000000.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis requerida de los comandos o los parámetros disponibles; siempre confirme el conjunto de comandos para la versión de firmware de su MT08.
- El MT08 admite tanto la configuración por SMS como el reporte por GPRS; use SMS cuando el enlace GPRS aún no esté configurado o para ajustes remotos.
- Elija TCP o UDP según las necesidades de su instalación y el comportamiento del firmware del equipo. Plaspy admite ambos y detectará el protocolo automáticamente cuando el dispositivo se conecte.
- Al especificar credenciales APN, mantenga el APN, el usuario y la contraseña exactamente como los proporciona el operador para evitar fallas de conexión.
- Los comandos públicos anteriores reflejan las plantillas SMS comunes del fabricante; siga las instrucciones de TopShine para cualquier paso adicional específico del proveedor.

## Por qué usar Plaspy con esta configuración

Usar el MT08 con Plaspy ofrece una vía sencilla para obtener ubicación en tiempo real, alertas y telemetría básica para motocicletas y vehículos pequeños. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy permite que el dispositivo reporte posiciones y eventos para que los responsables de flota y los conductores puedan ver la ubicación en vivo, recibir notificaciones y revisar recorridos históricos en una plataforma unificada.

Para obtener más información sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e instrucciones del fabricante, consulte TopShine en https://www.gztopshine.com/ para verificar la documentación y la configuración actual.
