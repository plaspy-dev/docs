---
slug: /sentar/q50/configuration
id: q50-configuration
sidebar_label: Configuration
title: Sentar - Q50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Sentar Q50 con Plaspy, incluyendo ajustes de servidor y comandos SMS para reportes
keywords:
  - Configuración Sentar Q50
  - Instalación Sentar Q50
  - Configuración servidor Sentar Q50
  - Sentar Q50 Plaspy
  - Configuración rastreador GPS Q50
  - Rastreador Sentar Plaspy
  - Configuración SMS Q50
  - Ajustes APN Sentar Q50
  - Configuración plataforma seguimiento Q50
  - Documentación Sentar Q50
---

# Sentar - Configuración Q50

Esta página documenta el contexto público de configuración para conectar el rastreador Sentar Q50 a Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos del fabricante disponibles públicamente para preparar el dispositivo a fin de reportar ubicación y estado a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor; por ello esta guía se centra en los pasos públicos y neutrales del dispositivo necesarios para apuntar al Q50 hacia Plaspy y validar la conectividad.

## Resumen de la configuración

Este proceso prepara el Q50 para comunicarse con Plaspy configurando los parámetros de red, el APN cuando sea necesario y el intervalo de actualización, de modo que el dispositivo reporte al endpoint y puerto del servidor Plaspy. Los comandos de ejemplo que se muestran aquí usan configuración vía SMS tal como aparece en la documentación pública del fabricante.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que los datos lleguen a Plaspy
- Configurar el transporte y el puerto para que el equipo pueda establecer sesiones de reporte GPRS
- Indicar el APN del operador y credenciales mediante comandos SMS del dispositivo cuando se requiera
- Establecer un intervalo de envío regular para controlar la frecuencia de actualizaciones del Q50
- Verificar los ajustes y confirmar que el dispositivo aparece en la plataforma Plaspy

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el Q50:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP cuando el dispositivo requiera selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta el protocolo correcto de forma automática.

## Requisitos habituales antes de la configuración

- Un dispositivo Q50 alimentado con acceso a la configuración vía SMS o mediante el método oficial del fabricante
- Una tarjeta SIM activa con GPRS/datos habilitados y credenciales APN conocidas del operador
- Acceso para enviar comandos SMS desde un teléfono o herramienta SMS que el dispositivo acepte
- Conocimiento de la contraseña del dispositivo que proporciona el fabricante; el ejemplo público usa 123456 como valor por defecto
- Un plan para verificar la conectividad desde Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando el Q50 está configurado con el endpoint y puerto del servidor Plaspy, envía mensajes de ubicación y estado al endpoint compartido de Plaspy, de modo que el dispositivo sea visible en la plataforma. Plaspy recibe los datos en el puerto configurado e identifica el protocolo del dispositivo automáticamente.

- El rastreador se apunta al dominio o dirección IP del servidor Plaspy
- El dispositivo abre una sesión GPRS y reporta al puerto 8888 en el endpoint de Plaspy
- El transporte puede configurarse en UDP o TCP según la opción del tracker
- Plaspy analiza los mensajes entrantes y los asigna automáticamente al perfil del dispositivo
- Un reporte exitoso resulta en visibilidad del dispositivo y telemetría en Plaspy

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante o a su software, o prepare los comandos SMS según el manual del dispositivo.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes del equipo.
3. Configure el puerto del servidor en 8888. Todos los dispositivos en Plaspy usan el mismo puerto.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Configure el APN y las credenciales si el operador las solicita, usando los marcadores de posición proporcionados cuando aplique.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma.

## Comandos de configuración de ejemplo

El Sentar Q50 soporta configuración vía SMS según las instrucciones públicas del fabricante. Los siguientes comandos son ejemplos públicos convertidos de la guía del fabricante. Estos comandos usan la contraseña de ejemplo 123456, que aparece como valor por defecto en el material público de configuración.

- Comando de restauración de fábrica (opcional paso inicial)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Comprobar el MCC y MNC de la SIM
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde {{apn}} es el nombre del APN, {{apnu}} es el usuario APN, {{apnp}} es la contraseña APN, y xxxyy son los dígitos MCC y MNC
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explicación: mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y cámbielos por los valores del operador. Reemplace xxxyy por los dígitos combinados MCC y MNC según sea necesario.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
pw,123456.ip,54.85.159.138,8888#
```

- Establecer intervalo de carga a 300 segundos
```text
pw123456,upload,300#
```

- Consultar ajustes actuales
```text
pw,123456,ts#
```

Notas sobre estos comandos:
- El ejemplo usa la contraseña pública por defecto 123456. Si su dispositivo utiliza otra contraseña, repárela en los comandos.
- Las sintaxis de los comandos se muestran tal como aparecen en la muestra pública de configuración. Use el formato exacto que su firmware requiera.
- Si el dispositivo acepta un nombre de dominio en lugar de una IP, utilice d.plaspy.com cuando su firmware requiera una cadena de dominio.

## Notas de configuración

- Los formatos de comandos SMS del fabricante y la puntuación requerida pueden variar según la versión de firmware; use el formato exacto que su dispositivo espere.
- Las instrucciones públicas del Q50 muestran configuración vía SMS. Si dispone del software del fabricante o de un portal web, utilice ese método cuando el proveedor lo recomiende.
- Elija UDP o TCP según la capacidad del dispositivo y las consideraciones de fiabilidad de la red. Plaspy soporta ambos transportes y detecta el protocolo automáticamente.
- Conserve y verifique los marcadores APN al establecer parámetros de datos móviles y confirme los valores MCC/MNC con el operador de la SIM.
- Tras aplicar los ajustes, permita un breve período para que el dispositivo establezca la sesión GPRS y aparezca en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Sentar Q50 con Plaspy ofrece una vía directa para la visibilidad en la plataforma apuntando el rastreador al endpoint y puerto compartidos de Plaspy. Ese endpoint estándar y la detección automática de protocolo de la plataforma reducen la necesidad de seleccionar protocolos por dispositivo en el lado del servidor, facilitando la integración de equipos GPS que siguen patrones de configuración públicos.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos visite https://www.plaspy.com. Los métodos de configuración específicos por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente en el sitio del fabricante http://www.sentarsmart.com/ antes del despliegue final.
