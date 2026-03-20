---
slug: /topshine/mt02_4g/configuration
id: mt02_4g-configuration
sidebar_label: Configuration
title: TopShine - MT02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el rastreador TopShine MT02-4G y apuntarlo a Plaspy para seguimiento en tiempo real
keywords:
  - TopShine MT02-4G
  - configuración MT02-4G
  - configuración rastreador TopShine
  - configuración Plaspy rastreador
  - configuración SMS rastreador GPS
  - ajustes servidor GPRS
  - configuración APN rastreador
  - configuración seguimiento de vehículos
  - integración seguimiento de flotas
  - MT02-4G Plaspy
---

# TopShine - MT02-4G Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopShine MT02-4G con Plaspy. Resume los pasos prácticos y los comandos SMS de uso público para preparar el dispositivo y hacer que reporte a Plaspy, además de explicar los ajustes de servidor que Plaspy requiere. El contenido se basa en la descripción del MT02-4G y en los comandos SMS habituales que el fabricante documenta para configurar el equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT02-4G suele configurarse mediante comandos SMS para la puesta en marcha, por lo que esta página incluye ejemplos públicos de comandos SMS y notas prácticas para ayudarle a integrar el dispositivo con Plaspy.

## Resumen de la configuración

Configurar un MT02-4G para Plaspy prepara el rastreador para enviar ubicación y telemetría al endpoint del servidor de Plaspy, de modo que el dispositivo sea visible en la plataforma. Los comandos SMS públicos del fabricante muestran cómo restablecer el dispositivo, establecer el ID, configurar el APN y apuntar el equipo al servidor GPRS y puerto de Plaspy. Siga el flujo de trabajo a continuación para asegurar que el rastreador pueda conectarse de forma fiable y sea detectado automáticamente por Plaspy.

- Establezca o confirme la contraseña del dispositivo y el IMEI para poder enviar comandos SMS de configuración.
- Configure el APN del operador móvil y las credenciales APN opcionales para que el rastreador tenga conectividad de datos.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que reporte al servicio compartido de Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Valide la conectividad verificando que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un MT02-4G con batería cargada y instalado físicamente según la guía de instalación del fabricante.
- Una SIM celular válida con datos y capacidad de SMS adecuada para su región y operador.
- Acceso al número telefónico del dispositivo para enviar comandos SMS de configuración.
- El número IMEI del equipo disponible para identificación y comandos de ID de dispositivo.
- Conocimiento de los valores APN del operador de la SIM (y, si aplica, nombre de usuario y contraseña APN).
- Acceso al método oficial de configuración de TopShine, como comandos SMS o software del proveedor cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

El MT02-4G se configura para enviar telemetría y datos de ubicación a través del enlace de datos celulares (GPRS/4G) al endpoint y puerto del servidor Plaspy. Plaspy muestra entonces la posición en tiempo real y los eventos en la plataforma, manejando la detección automática del protocolo del rastreador.

- El rastreador reporta ubicación y estado del dispositivo al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo manualmente en la plataforma.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; elija el transporte que soporte el hardware y que favorezca la red.
- Una vez que el dispositivo está reportando, Plaspy ofrece visibilidad de ubicación en vivo, rutas históricas y alertas por eventos.
- El dispositivo puede subir puntos almacenados una vez que se restaure la conectividad, de modo que los eventos se preserven.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de TopShine, normalmente comandos SMS documentados por el fabricante o la herramienta del proveedor.
2. Confirme u obtenga el IMEI del dispositivo y la contraseña por defecto (los ejemplos públicos usan 000000 como contraseña).
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS en la configuración del dispositivo.
4. Configure el puerto 8888 como puerto del servidor para Plaspy y seleccione UDP o TCP si el equipo requiere elegir el transporte.
5. Configure el APN del operador y las credenciales opcionales para que el rastreador pueda establecer una sesión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo requiere.
7. Valide que el dispositivo está reportando a Plaspy revisando el tablero de Plaspy para el rastreador o confirmando cargas de datos recientes.

## Ejemplos de comandos de configuración

El MT02-4G soporta configuración por SMS. Los siguientes comandos públicos son ejemplos tomados de la documentación del fabricante. Estos SMS usan la contraseña por defecto 000000 en los ejemplos. Reemplace la porción de la contraseña solo si la ha cambiado.

Notas:
- Envíe cada comando como un SMS al número del dispositivo.
- Reemplace los marcadores como [apn], [apnu] y [apnp] con su APN de operador, nombre de usuario APN y contraseña APN respectivamente.
- Para el comando de ID del dispositivo, el fabricante indica usar los primeros 14 dígitos del IMEI al establecer el Id; Plaspy identifica los rastreadores por IMEI en su lado.

1. Restablecer a configuración de fábrica (paso inicial opcional)
```text
W000000,990,099###
```

2. Establecer el Id del dispositivo usando los primeros 14 dígitos del IMEI (construya el valor de 14 dígitos desde su IMEI)
```text
W000000,010,<first14digitsOfIMEI>
```
Ejemplo: si el IMEI es 123456789012345, use 12345678901234 en el comando.

3. Configurar el APN del operador (reemplace los marcadores)
```text
W000000,011,[apn]
```
Si su operador requiere nombre de usuario o contraseña APN inclúyalos:
```text
W000000,011,[apn],[apnu],[apnp]
```
- [apn] = el APN de su operador móvil
- [apnu] = nombre de usuario APN si es requerido
- [apnp] = contraseña APN si es requerida

4. Establecer el servidor GPRS a Plaspy (este ejemplo usa la IP pública y el puerto de Plaspy)
```text
W000000,012,54.85.159.138,8888
```
Alternativamente puede usar el dominio de Plaspy en herramientas del proveedor o ajustes donde se acepte un dominio:
- d.plaspy.com y puerto 8888

5. Cambiar a modo GPRS
```text
W000000,013,2
```

6. Establecer el intervalo de actualización/reportes (valor de ejemplo de los comandos públicos)
```text
W000000,014,6
```

7. Comando para solicitar el IMEI del dispositivo (verificación)
```text
W000000,601
```

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos o el formato de los parámetros; revise las notas de versión del fabricante antes de despliegues a gran escala.
- El MT02-4G soporta configuración vía SMS como se muestra en los ejemplos públicos, pero también puede estar disponible software del proveedor o una herramienta de configuración de TopShine.
- Al configurar el servidor GPRS puede usar el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta el protocolo automáticamente.
- Elija TCP o UDP en el dispositivo según las condiciones de red y las opciones del firmware; UDP es común en rastreadores pero verifique la documentación del dispositivo.
- Reemplace cuidadosamente los marcadores de APN y los valores derivados del IMEI; un APN incorrecto o un ID de dispositivo mal formado impedirán que los datos lleguen a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el MT02-4G con Plaspy ofrece una vía sencilla para seguimiento en tiempo real, historial de rutas y alertas de eventos para flotas y activos vehiculares. La combinación de un rastreador 4G compacto con los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reduce la carga de configuración por dispositivo y simplifica los despliegues en flotas mixtas.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique métodos de configuración específicos del dispositivo, comportamiento del firmware y detalles del fabricante en el sitio oficial de TopShine https://www.gztopshine.com/ ya que estos elementos pueden cambiar con el tiempo.
