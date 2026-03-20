---
slug: /sentar/elderly/configuration
id: elderly-configuration
sidebar_label: Configuration
title: Sentar - Elderly Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el reloj GPS Sentar Elderly, con ajustes del servidor Plaspy, comandos SMS y pasos prácticos para conectar el dispositivo
keywords:
  - Sentar Elderly configuración
  - Sentar Elderly instalación
  - Sentar Elderly Plaspy
  - Configuración reloj GPS Sentar
  - Configuración rastreador GPS para adultos mayores
  - Configuración servidor Plaspy
  - Comandos SMS rastreador GPS
  - Configuración rastreador wearable
  - Configuración dispositivo compatible Plaspy
  - Configuración rastreador Sentar
---

# Sentar - Configuración Elderly

Esta página describe el contexto público de configuración para usar el reloj GPS Sentar Elderly con Plaspy. Se centra en los ajustes prácticos del servidor, las comprobaciones previas y los comandos SMS suministrados por el fabricante que se usan comúnmente para apuntar el dispositivo a Plaspy y habilitar el rastreo y las alertas centralizadas. Utilice esta guía para entender qué debe aplicar en el dispositivo antes de registrar y supervisar el reloj en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente los protocolos de los rastreadores cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; los comandos SMS de ejemplo de Sentar que aparecen abajo reflejan comandos públicos comunes y una contraseña de dispositivo por defecto indicada en la muestra del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el reloj Sentar Elderly para que envíe de forma fiable datos de ubicación y eventos a la plataforma Plaspy y confirmar la conectividad para que el dispositivo aparezca y reporte correctamente en Plaspy. En este modelo, la configuración pública suele realizarse mediante comandos SMS enviados al dispositivo desde un teléfono de administración, aunque también puede existir software del proveedor.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los envíos lleguen al host y puerto correctos.
- Configurar APN y parámetros GPRS para que el reloj use datos móviles para el envío.
- Validar la conectividad y la detección de protocolo para que Plaspy reciba actualizaciones de posición y eventos.
- Opcionalmente realizar un restablecimiento de fábrica y ajustes básicos de zona horaria o intervalo de subida como parte del aprovisionamiento inicial.
- Confirmar que el reloj aparece en Plaspy y reporta actualizaciones regulares tras la configuración.

## Ajustes del servidor Plaspy

- Use el dominio de servidor d.plaspy.com cuando el dispositivo acepte un host DNS.
- Use la IP del servidor 54.85.159.138 cuando el dispositivo requiera una dirección IP.
- El puerto 8888 es el puerto en escucha de Plaspy y se usa para todos los dispositivos en Plaspy.
- El transporte puede ser UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy realiza detección automática de protocolo cuando el dispositivo se conecta para resolver el protocolo correcto del rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo Sentar Elderly con batería cargada y una tarjeta SIM operativa con acceso a datos móviles para uplink GPRS/4G.
- Acceso al método de control del dispositivo proporcionado por el fabricante, como comandos SMS o herramientas de configuración del proveedor.
- Conocimiento de la contraseña del dispositivo utilizada para la configuración por SMS (en la muestra del fabricante se usa 123456 por defecto).
- Credenciales APN del operador móvil si el dispositivo requiere ingresar explícitamente APN, usuario o contraseña.
- Un teléfono de gestión capaz de enviar comandos SMS al rastreador o una herramienta de aprovisionamiento equivalente.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el reloj GPS Sentar Elderly envía actualizaciones periódicas de posición y eventos clave a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes, detecta automáticamente el protocolo del dispositivo y asigna los datos entrantes al dispositivo registrado para visibilidad en tiempo real y alertas.

- El reloj envía actualizaciones de ubicación y mensajes de estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; cualquiera de los dos puede seleccionarse durante la puesta en marcha.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se requiere poca selección manual del protocolo en la plataforma.
- Eventos como pulsaciones de SOS y telemetría básica se reenvían a Plaspy para alertas e historial.
- Una vez conectado, el dispositivo es visible en Plaspy donde se puede consultar el historial de posiciones y eventos recientes para monitorización.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o software, o prepárese para enviar comandos SMS desde un teléfono de administración según lo indicado por Sentar.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto que usa Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Configure el APN, el usuario y la contraseña según las indicaciones del operador móvil para que el reloj pueda usar datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el proceso lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del dispositivo y las actualizaciones de posición recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

La muestra del fabricante Sentar muestra comandos SMS usados para configurar el rastreador. Estos son comandos públicos de ejemplo y deben enviarse como mensajes SMS al número del dispositivo. Los comandos de ejemplo usan la contraseña de dispositivo 123456 como valor por defecto.

1. Restablecimiento de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

2. Ajustar la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

3. Comprobar MCC y MNC (IMSI)
```text
pw,123456,imsi#
```

4. Establecer el APN del operador donde [apn] es el nombre del APN, [apnu] es el usuario APN, [apnp] es la contraseña APN y xxxyy representa MCC y MNC concatenados
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
- Explicación: reemplace [apn], [apnu] y [apnp] con los valores del APN de su operador. El marcador xxxyy representa los códigos numéricos del operador que pueden ser necesarios en este formato de comando.

5. Establecer el servidor GPRS a la IP y puerto de Plaspy (según la muestra del fabricante)
```text
pw,123456.ip,54.85.159.138,8888#
```

6. Ajustar el intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```

7. Comprobar la configuración actual
```text
pw,123456,ts#
```

Nota: Los comandos anteriores se presentan tal como aparecen en las muestras públicas del fabricante. Si un comando no funciona como se espera, consulte la documentación oficial de Sentar para la sintaxis exacta correspondiente a su revisión de firmware.

## Observaciones sobre la configuración

- Los comandos SMS del fabricante y la sintaxis exacta pueden variar según la versión de firmware o las revisiones regionales de hardware; confirme siempre con el manual del dispositivo para su unidad.
- La muestra del dispositivo usa aprovisionamiento por SMS; las herramientas del proveedor o una app de configuración pueden ofrecer una vía alternativa para establecer los mismos ajustes.
- La contraseña por defecto del dispositivo en la muestra es 123456. Cambie las contraseñas por defecto cuando sea posible después del aprovisionamiento por razones de seguridad.
- TCP y UDP son compatibles como transporte; elija el transporte requerido por su despliegue y configure el dispositivo para usarlo en el puerto 8888.
- Un restablecimiento de fábrica suele ser opcional y solo debe usarse al iniciar con un dispositivo de configuración desconocida o cuando el fabricante lo recomienda.

## Por qué usar Plaspy con esta configuración

Configurar el reloj Sentar Elderly para reportar a Plaspy proporciona a cuidadores y servicios de monitorización un punto central para ver la ubicación en tiempo real, recibir alertas SOS y revisar el historial reciente del dispositivo. Usar los ajustes compartidos de servidor Plaspy simplifica el aprovisionamiento en varios dispositivos, ya que todos usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos compatibles, visite https://www.plaspy.com. Para detalles específicos de configuración más recientes, notas de firmware y la sintaxis oficial de comandos, verifique la documentación del fabricante en http://www.sentarsmart.com/ dado que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
