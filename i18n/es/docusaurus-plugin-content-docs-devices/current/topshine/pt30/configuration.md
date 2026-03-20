---
slug: /topshine/pt30/configuration
id: pt30-configuration
sidebar_label: Configuration
title: TopShine - PT30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopShine PT30 con Plaspy por SMS o ajustes GPRS
keywords:
  - Configuración TopShine PT30
  - Configuración PT30 para Plaspy
  - Configuración del rastreador TopShine
  - Configuración de servidor PT30
  - Ajustes plataforma GPS PT30
  - Comandos SMS TopShine PT30
  - Configuración GPRS PT30
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador personal
  - Integración servidor rastreador
---

# TopShine - Configuración del PT30

Esta página documenta el contexto público de configuración para usar el rastreador TopShine PT30 con Plaspy. Consolida los pasos de configuración visibles por el fabricante y los ajustes exactos del servidor Plaspy que deberá aplicar al apuntar un PT30 a nuestra plataforma, con ejemplos prácticos de comandos SMS públicos cuando estén disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el estilo de instalación y las herramientas del proveedor. El PT30 admite métodos de configuración por SMS y GPRS y puede operar con transporte TCP o UDP, por lo que esta guía se centra en las acciones públicas y comunes necesarias para registrar y verificar un PT30 con el endpoint de Plaspy.

## Visión general de la configuración

Preparar un TopShine PT30 para Plaspy significa asegurarse de que el dispositivo pueda comunicarse por GPRS con el endpoint de Plaspy o enviar los comandos SMS necesarios para que el rastreador reporte en la plataforma. Los siguientes puntos resumen los objetivos prácticos del proceso de configuración.

- Configurar el PT30 para que reporte al endpoint y puerto del servidor Plaspy usando el método de configuración del dispositivo.
- Asegurar que el dispositivo tenga conectividad GPRS funcional y que el APN del operador esté correctamente configurado para el envío de datos.
- Validar la identidad del dispositivo y el IMEI para que Plaspy pueda asociar los datos entrantes con el registro correcto del rastreador.
- Confirmar la selección del transporte (UDP o TCP) si fuera necesario y guardar los ajustes en el rastreador.
- Verificar que el dispositivo aparezca y envíe actualizaciones en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el PT30. Plaspy requiere el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de comenzar

- Un PT30 con alimentación y batería suficiente o alimentación externa para la configuración y las pruebas.
- Una tarjeta SIM operativa con datos habilitados y el APN correcto del operador móvil.
- Acceso al método de configuración del PT30 soportado por el dispositivo, como comandos SMS descritos en la documentación del fabricante.
- Tener a la mano el número IMEI del dispositivo para la configuración de identidad y verificación.
- Conocer la contraseña predeterminada del dispositivo si se requiere para los comandos SMS; la contraseña pública por defecto es 000000.
- Acceso a la documentación del fabricante o a las herramientas del proveedor para confirmar instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El PT30 puede configurarse para enviar actualizaciones de ubicación y estado al endpoint y puerto compartidos de Plaspy mediante GPRS. Una vez que el dispositivo apunte al endpoint de Plaspy y la conectividad de red esté activa, la plataforma detectará automáticamente el protocolo del dispositivo y comenzará a aceptar reportes para visibilidad y monitoreo.

- El rastreador envía actualizaciones periódicas de ubicación al endpoint d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy gestiona ambos.
- Plaspy utiliza la identidad del dispositivo (basada en IMEI) para mapear los paquetes entrantes al rastreador correcto en la plataforma.
- Tras una configuración correcta, el dispositivo aparecerá en Plaspy y ofrecerá visibilidad operativa para monitoreo y alertas.
- Use comandos SMS de verificación cuando aplique para confirmar el IMEI y recibir respuestas inmediatas antes de confiar en el reporte por GPRS.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TopShine descrito por el fabricante, típicamente comandos SMS o la herramienta de configuración del proveedor.
2. Configure la dirección del servidor a d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 cuando el dispositivo requiera una entrada IP.
3. Establezca el puerto del servidor a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP en el rastreador si el firmware requiere elegir el transporte.
5. Configure el APN del operador y, si aplica, el nombre de usuario y contraseña del APN para que el dispositivo pueda establecer GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparezca en la plataforma y que se reciban actualizaciones.

Si utiliza comandos SMS para la configuración, siga la secuencia del fabricante y verifique el IMEI y las respuestas del servidor antes de confirmar la conectividad GPRS.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del PT30 se envían vía SMS. Los comandos siguientes se conservan tal como aparecen en ejemplos públicos del fabricante. La contraseña del dispositivo mostrada es la contraseña pública por defecto 000000 y debe reemplazarse si la ha cambiado. Sustituya los marcadores de posición antes de enviar.

- Comando de restauración de fábrica (opcional reinicio inicial)
  
  Descripción: Restablece el rastreador a la configuración de fábrica. Use solo cuando sea necesario durante la configuración inicial.
  
  ```
  W000000,990,099###
  ```

- Establecer el ID del dispositivo
  
  Descripción: Configura el campo ID del dispositivo. Use los primeros 14 dígitos derivados del IMEI si el formato del comando lo requiere. Plaspy usa el IMEI completo (15 dígitos) como identificador en la plataforma.
  
  Ejemplo (reemplace \<14_DIGITS> con los primeros 14 dígitos del IMEI):
  
  ```
  W000000,010,\<14_DIGITS>
  ```

- Configurar el APN del operador
  
  Descripción: Configure el APN del operador móvil para que el dispositivo pueda usar GPRS. Reemplace [apn] con el APN de su operador. Si el operador requiere usuario y contraseña del APN, incluya [apnu] y [apnp] respectivamente. Los campos de usuario y contraseña son opcionales y se usan solo si su operador los requiere.
  
  Ejemplo solo con APN:
  
  ```
  W000000,011,[apn]
  ```
  
  Ejemplo con usuario y contraseña del APN:
  
  ```
  W000000,011,[apn],[apnu],[apnp]
  ```

- Apuntar el servidor GPRS a Plaspy
  
  Descripción: Configure el rastreador para que apunte a la IP y puerto del servidor Plaspy. Este ejemplo usa la IP pública del servidor Plaspy y el puerto 8888.
  
  ```
  W000000,012,54.85.159.138,8888
  ```

- Cambiar a modo GPRS
  
  Descripción: Configure el dispositivo para que use GPRS como modo de reporte.
  
  ```
  W000000,013,2
  ```

- Establecer el intervalo de actualización
  
  Descripción: Configure el intervalo de reportes periódicos. El valor de ejemplo 6 es un ejemplo del fabricante para un intervalo; revise el manual del dispositivo para las unidades del intervalo y los valores permitidos.
  
  ```
  W000000,014,6
  ```

- Consultar IMEI del dispositivo
  
  Descripción: Use este comando para solicitar el IMEI del dispositivo vía SMS para su verificación.
  
  ```
  W000000,601
  ```

Nota: Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos con los valores de su operador. La contraseña predeterminada de los ejemplos SMS es 000000; sustituya la contraseña si la ha cambiado en el dispositivo.

## Notas de configuración

- El comportamiento del firmware difiere entre revisiones de hardware PT30 y versiones de firmware; confirme siempre el formato exacto de los comandos en el manual del fabricante para la versión de firmware de su dispositivo.
- El PT30 soporta tanto la configuración por SMS como por GPRS; los comandos SMS son útiles para configurar de forma remota cuando no es posible acceder físicamente a la interfaz del dispositivo.
- Elija TCP o UDP según la preferencia del instalador; Plaspy acepta ambos y realiza detección automática de protocolo en las conexiones entrantes.
- Plaspy requiere el mismo puerto para todos los dispositivos; debe usar el puerto 8888 al apuntar el PT30 a la plataforma.
- Verifique siempre el APN del operador y las credenciales opcionales del APN antes de intentar cambiar el dispositivo a modo GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine PT30 para que reporte a Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación y recibir alertas desde un rastreador personal compacto y eficiente en consumo de energía. Usar Plaspy con el endpoint de servidor compartido simplifica la incorporación de flotas o activos porque Plaspy detecta automáticamente el protocolo del rastreador y utiliza ajustes de servidor consistentes entre los dispositivos compatibles.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y recomendaciones de instalación del fabricante, verifique los detalles en la documentación oficial de TopShine en https://www.gztopshine.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
