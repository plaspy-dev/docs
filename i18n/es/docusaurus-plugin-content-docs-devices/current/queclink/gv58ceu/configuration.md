---
slug: /queclink/gv58ceu/configuration
id: gv58ceu-configuration
sidebar_label: Configuration
title: QuecLink - GV58CEU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV58CEU para Plaspy, con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink GV58CEU
  - Configuración GV58CEU
  - QuecLink GV58CEU Plaspy
  - Configuración de servidor GV58CEU
  - Configuración rastreador GPS GV58CEU
  - Configuración rastreador QuecLink
  - Configuración de dispositivo Plaspy
  - Rastreo de vehículos GV58CEU
  - Rastreo de flotas GV58CEU
  - Configuración SMS GV58CEU
---

# QuecLink - GV58CEU Configuración

Esta página documenta el contexto público de configuración para usar el QuecLink GV58CEU con Plaspy. Se centra en los ajustes prácticos de servidor y del dispositivo necesarios para que el rastreador informe a Plaspy y muestra ejemplos de comandos SMS cuando están disponibles públicamente. Utilice esta guía para preparar el dispositivo y entender los pasos principales necesarios para la integración con la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante, como comandos SMS, utilidades y rutas exactas de menú, pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos de SMS que se muestran abajo son ejemplos públicos para la configuración del GV58CEU e incluyen marcadores que usted debe reemplazar por los valores de su SIM o proveedor.

## Resumen de configuración

Este proceso prepara el GV58CEU para comunicarse con Plaspy configurando su endpoint de servidor, el transporte y el comportamiento de reporte. El objetivo es garantizar que el dispositivo envíe posiciones GNSS y telemetría de eventos al endpoint de Plaspy en el puerto correcto para que el dispositivo sea visible y gestionable en la plataforma.

- Configure el dispositivo para usar Plaspy como su endpoint GPRS/TCP, de modo que los datos se envíen a d.plaspy.com.
- Elija el transporte (UDP o TCP) y establezca el puerto compartido de Plaspy para asegurar la conectividad.
- Valide la conectividad de la SIM y los ajustes de APN para que el rastreador pueda abrir una sesión de datos.
- Defina los intervalos de reporte y las entradas para que el dispositivo envíe actualizaciones periódicas a Plaspy para monitoreo y alertas.
- Verifique que el rastreador aparezca y reporte correctamente en Plaspy después de aplicar los cambios.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Una unidad GV58CEU instalada y con alimentación, con acceso a su interfaz SMS o de configuración
- Una SIM celular activa con datos habilitados y el APN correcto, usuario y contraseña según su operador
- Conocimiento de la contraseña del dispositivo o de la contraseña por defecto para la configuración por SMS (los ejemplos abajo usan queclink como valor por defecto)
- Acceso a las herramientas de configuración de QuecLink o la capacidad de enviar mensajes SMS de configuración al rastreador
- Conocimientos básicos sobre si usará transporte UDP o TCP para reportar a Plaspy
- Una cuenta en Plaspy y el proceso de aprovisionamiento de dispositivos para confirmar que el equipo es visible tras la configuración

## Cómo se conecta este rastreador a Plaspy

El GV58CEU se configura para reportar posiciones GNSS y telemetría de eventos al endpoint y puerto compartido de Plaspy, de modo que Plaspy pueda ingerir y mostrar ubicación, entradas y datos de sensores. El reporte suele realizarse a través de la conexión celular del dispositivo usando sesiones de datos GPRS y transporte estándar TCP o UDP hacia el servidor de Plaspy.

- El dispositivo abre una sesión de datos y envía mensajes de posición y estado a d.plaspy.com en el puerto 8888
- Plaspy también puede aceptar conexiones usando la IP del servidor 54.85.159.138 como alternativa o fallback
- El transporte puede configurarse como UDP o TCP según la preferencia de instalación y las opciones de firmware
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor acepta los mensajes del dispositivo sin selección manual del protocolo
- Una vez activo el reporte, el dispositivo aparece en Plaspy para monitoreo en tiempo real, historial y alertas

## Flujo de configuración recomendado

1. Acceda al método de configuración oficial de QuecLink para GV58CEU, normalmente mediante comandos SMS o la herramienta de configuración del fabricante.
2. Ingrese d.plaspy.com como dominio del servidor o use la IP 54.85.159.138 donde corresponda en los ajustes del servidor del dispositivo.
3. Configure el puerto del servidor en 8888 exactamente como lo requiere Plaspy; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija el transporte UDP o TCP si el dispositivo requiere la selección del tipo de transporte.
5. Configure el APN, usuario APN y contraseña APN para la SIM, de modo que el dispositivo pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el firmware lo exige.
7. Valide la conectividad y confirme que el GV58CEU está reportando a Plaspy comprobando el estado del dispositivo en la plataforma y buscando actualizaciones de posición recientes.

## Ejemplos de comandos de configuración

El GV58CEU soporta configuración vía SMS. Los siguientes ejemplos públicos de comandos SMS se proporcionan en el orden mostrado en la guía pública de QuecLink. Los comandos usan la contraseña del dispositivo queclink en estos ejemplos; reemplace por la contraseña de su dispositivo si es diferente. Conserve los marcadores como [apn] al enviar y reemplácelos por los valores de su operador.

1. Paso inicial opcional: restaurar ajustes de fábrica (etiquetado aquí como reinicio inicial opcional). Use esto solo si necesita resetear el dispositivo antes de configurar.

```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0

```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador. Reemplace los marcadores por los datos de su operador:
- [apn] es la cadena APN
- [apnu] es el usuario APN si se requiere
- [apnp] es la contraseña APN si se requiere

```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Configurar el servidor GPRS a Plaspy. Este ejemplo incluye el dominio y la IP de Plaspy y establece el puerto 8888. Esta configuración garantiza que el dispositivo intentará enviar a d.plaspy.com e incluye 54.85.159.138 como entrada IP.

```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de reporte/actualización a 60 segundos en este ejemplo. Ajuste según su política de reporte.

```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2 (ejemplo de habilitación de una entrada de alarma)

```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre estos comandos
- Envíe cada línea como un SMS al número del GV58CEU. Los métodos exactos de envío pueden variar según la pasarela SMS o el teléfono.
- Reemplace queclink por la contraseña real del dispositivo si se ha cambiado respecto al valor por defecto.
- Reemplace los marcadores de APN por los valores de su operador antes de enviar.
- El comando GTSRI configura entradas de dominio y IP del servidor e incluye el dominio de Plaspy y la IP de Plaspy con puerto 8888 como se muestra.

## Notas de configuración

- Los comandos mostrados son basados en SMS y reflejan la sintaxis pública de QuecLink; las herramientas del fabricante o utilidades para PC pueden proporcionar ajustes equivalentes mediante una interfaz gráfica.
- Las revisiones de firmware y las variantes de hardware pueden cambiar parámetros y comportamiento exactos; verifique los comandos contra la documentación actual de QuecLink para GV58CEU.
- Puede elegir TCP o UDP al configurar el transporte; pruebe ambos si es necesario, pero recuerde que Plaspy acepta cualquiera y detecta el protocolo automáticamente.
- El mismo puerto de Plaspy 8888 se usa para todos los dispositivos en la flota, lo que simplifica la configuración del servidor entre diferentes modelos.
- Mantenga un registro de las contraseñas de los dispositivos y cambie las contraseñas por defecto cuando corresponda según la política de seguridad de su organización.

## Por qué usar Plaspy con esta configuración

Configurar el GV58CEU para reportar a Plaspy ofrece visibilidad centralizada sobre la ubicación del vehículo, el estado de entradas y la telemetría. Para operadores de flotas y gestores de servicio, usar el endpoint compartido de Plaspy permite una ingestión consistente de datos GNSS y de eventos, de modo que los equipos puedan monitorear el movimiento de vehículos, responder a alarmas y gestionar controles remotos como salidas o inmovilización cuando estén soportados.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y los flujos de trabajo de flotas visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante más recientes, verifique los detalles en el sitio oficial de QuecLink https://www.queclink.com/ antes de aplicar cambios.
