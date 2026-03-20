---
slug: /topten/tk108/configuration
id: tk108-configuration
sidebar_label: Configuration
title: TopTen - TK108 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopTen TK108 y su compatibilidad con Plaspy con pasos prácticos
keywords:
  - Configuración TopTen TK108
  - Configuración inicial TopTen TK108
  - Configuración servidor TopTen TK108
  - Configuración TK108 Plaspy
  - Configuración rastreador GPS TK108
  - Configuración rastreador Plaspy
  - Configuración plataforma GPS
  - Configuración rastreo vehicular
  - Comandos SMS TK108
  - Configuración GPRS rastreador
---

# TopTen - Configuración del TK108

Esta página documenta el contexto público de configuración para usar el rastreador vehicular TopTen TK108 con Plaspy. Compila los pasos prácticos y los comandos SMS públicamente disponibles que se usan habitualmente para preparar el TK108 y permitir su comunicación con un servidor de terceros como Plaspy. La información se basa en la descripción pública del TK108 y en los comandos de configuración que suministra el fabricante, cuando aplican.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Cuando TopTen proporciona comandos SMS y parámetros GPRS para el TK108, esos comandos se incluyen a continuación como ejemplos públicos para ayudar a conectar el dispositivo con Plaspy.

## Resumen de la configuración

Configurar el TK108 para Plaspy consiste en indicar al rastreador el endpoint del servidor correcto, los ajustes de GPRS/APN y asegurarse de que el identificador del dispositivo sea conocido para que aparezca en la plataforma Plaspy. El TK108 también soporta control por SMS y puede reportar eventos como encendido/apagado del motor, pérdida de alimentación y alertas SOS, lo que facilita el monitoreo operativo.

- Prepare el dispositivo para enviar datos de ubicación y eventos al endpoint de Plaspy.
- Proporcione los datos APN y GPRS para que el rastreador utilice la red móvil.
- Configure el servidor de reporte del dispositivo hacia Plaspy usando la dirección y el puerto compartidos.
- Verifique el identificador del rastreador (generalmente derivado del IMEI) para que Plaspy pueda mapear el dispositivo a una cuenta.
- Valide la conectividad y el reporte de eventos en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

Al configurar el TK108 para usar con Plaspy, utilice las siguientes configuraciones públicas exactamente como se muestran:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP; the device may be configured to use either protocol on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un dispositivo TK108 alimentado y accesible para configuración y pruebas.
- Una SIM celular válida con plan de datos activo y capacidad de SMS para enviar mensajes de configuración si se utilizan comandos SMS.
- Las credenciales APN del proveedor de la SIM para configurar el GPRS en el rastreador.
- Conocimiento del IMEI del dispositivo para determinar el identificador que usa Plaspy.
- Acceso a las instrucciones de configuración del fabricante TopTen o a las herramientas de instalador correspondientes a su versión de firmware.
- Un método para recibir respuestas del dispositivo, como respuestas SMS del rastreador o monitoreo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK108 se configura para comunicarse con el endpoint y puerto compartidos de Plaspy, de modo que los mensajes de ubicación y eventos lleguen a la plataforma Plaspy para su visualización y monitoreo. La detección automática de protocolo de Plaspy permite que el mismo servidor y puerto acepten datos de muchos protocolos de rastreadores.

- El rastreador se configura para reportar al dominio o IP del servidor Plaspy y al puerto 8888.
- Los datos y eventos se transmiten por GPRS al servidor configurado usando UDP o TCP.
- El identificador del rastreador que usa Plaspy se deriva del IMEI del dispositivo, según lo descrito en los comandos del fabricante.
- Plaspy recibe los mensajes entrantes, detecta automáticamente el protocolo del rastreador y asocia los mensajes con el ID del dispositivo para que sean visibles en la plataforma.
- Después de la configuración, valide que las actualizaciones de posición y las alertas aparezcan en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración TopTen para su TK108, normalmente comandos SMS o el software del fabricante, y confirme el comportamiento del firmware del dispositivo.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del rastreador.
3. Establezca el puerto del servidor en 8888; Plaspy utiliza el mismo puerto para los dispositivos soportados.
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere una selección explícita.
5. Configure el APN y los parámetros GPRS para que el dispositivo pueda conectarse a las redes de datos móviles.
6. Aplique o guarde la configuración en el rastreador y reinicie el equipo si el dispositivo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que los mensajes de ubicación o eventos aparezcan en la plataforma.

## Comandos de configuración de ejemplo

TopTen proporciona comandos de configuración por SMS para el TK108. Los siguientes comandos públicos son ejemplos típicos extraídos de la guía del fabricante. Conserve los marcadores de posición tal como se muestran y reemplácelos por los valores de su proveedor de SIM.

- Restauración inicial de fábrica opcional (use solo cuando sea necesario o para preparar una configuración nueva):
```text
111111CLR
```

- Ejemplo de comando SMS para establecer el APN GPRS y el servidor Plaspy por IP con puerto 8888:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explicación de los marcadores de posición:
- {{apn}} es el nombre del APN de su operador móvil.
- {{apnu}} es el usuario del APN si lo requiere el operador; puede quedar vacío en muchos casos.
- {{apnp}} es la contraseña del APN si la requiere el operador; puede quedar vacía en muchos casos.

- Ejemplo de comando para solicitar y comprobar la configuración actual en el dispositivo:
```text
111111WWW:
```

Notas adicionales de la guía del fabricante:
- El ID del rastreador que usa Plaspy corresponde a los últimos 14 dígitos del IMEI según lo devuelve el comando PAR del dispositivo o la respuesta de estado. Use el IMEI para determinar el identificador que verá en Plaspy.

## Notas de configuración

- La configuración mediante SMS es de uso común con el TK108; asegúrese de que la entrega de SMS sea fiable antes de depender únicamente de SMS para la configuración.
- Las revisiones de firmware y las variantes de proveedor pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme los comandos con el firmware de su dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y las indicaciones del proveedor; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Use la IP o el dominio del servidor exactamente como se proporcionan al configurar el rastreador: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Mantenga copias de seguridad de cualquier configuración que modifique y registre el IMEI del dispositivo para que pueda emparejarse con el identificador mostrado en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TK108 con Plaspy ofrece una vía sencilla para centralizar la ubicación de vehículos, las alertas de eventos y el monitoreo operativo. El control por SMS del TK108, su reporte de eventos y su registro offline lo convierten en una opción adecuada para flotas o instalaciones de seguridad vehicular. Configurar el rastreador para que reporte a Plaspy garantiza que esos mensajes se recopilen y visualicen en una única plataforma.

Para obtener más información sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Verifique siempre las instrucciones específicas del dispositivo y el comportamiento del firmware con el fabricante en http://www.t10.cn ya que los procedimientos y las funciones de firmware pueden cambiar con el tiempo.
