---
slug: /eelink/tk418/configuration
id: tk418-configuration
sidebar_label: Configuration
title: EElink - TK418 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK418 con Plaspy, con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración EElink TK418
  - Instalación EElink TK418
  - Configuración TK418 Plaspy
  - Configuración rastreador GPS EElink
  - Ajustes servidor TK418
  - Configuración rastreador Plaspy
  - Comandos SMS EElink TK418
  - Configuración APN TK418
  - Integración dispositivo EElink
  - Compatibilidad rastreador GPS Plaspy
---

# EElink - Configuración del TK418

Esta página documenta el contexto público de configuración para usar el EElink TK418 con la plataforma de rastreo Plaspy. Reúne los ajustes de servidor de Plaspy que debe aplicar y muestra los comandos SMS públicos más comunes para el TK418, de modo que usted pueda preparar el dispositivo para enviar datos a Plaspy y habilitar el rastreo en tiempo real y la notificación de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que los ejemplos de SMS que aparecen aquí deben considerarse como una base práctica pública y le recomendamos verificar diferencias específicas del dispositivo en la documentación de EElink.

## Resumen de configuración

El objetivo de la configuración es dirigir al TK418 para que envíe mensajes de posición y eventos a Plaspy y validar la conectividad para que el dispositivo sea visible en la plataforma. El TK418 es un equipo compacto orientado a IoT con conectividad LTE Cat M1 y NB‑IoT como principales y respaldo GSM, y soporta multi GNSS y reporte de eventos que Plaspy puede procesar una vez aplicados los ajustes del servidor.

- Configure el dispositivo para usar el endpoint de Plaspy y el puerto compartido para que los informes lleguen a la plataforma.
- Defina el APN y los parámetros GPRS para que el rastreador tenga conectividad de datos móviles.
- Valide que el rastreador esté enviando posición y eventos a Plaspy después de la configuración.
- Use los comandos SMS o las herramientas oficiales de EElink para aplicar los ajustes y confirme con una verificación de parámetros.
- Asegúrese de la selección de transporte (UDP o TCP) si el dispositivo lo requiere, ya que Plaspy acepta ambos.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com debe estar disponible como destino en la configuración del rastreador.
- La dirección IP 54.85.159.138 también es una opción aceptada por Plaspy si prefiere usar una dirección numérica.
- El puerto 8888 es el que Plaspy emplea para las conexiones de los dispositivos.
- Se admite transporte por UDP o TCP; el rastreador puede configurarse usando cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido utilizado por todos los equipos.

## Requisitos previos típicos

- Un TK418 instalado y con alimentación, con una SIM celular activa y provisionada para datos y SMS según sea necesario.
- Acceso a un teléfono capaz de enviar comandos SMS de configuración o a la herramienta oficial de configuración de EElink si prefiere esa vía.
- Datos del APN, usuario y contraseña proporcionados por el operador móvil si la red los requiere.
- Plan de ubicación y alimentación para que el dispositivo tenga cobertura celular estable y visibilidad GNSS durante las pruebas.
- Conocer el IMEI del dispositivo o información identificadora para correlacionar el rastreador físico con un registro en Plaspy.
- Tener en cuenta que las revisiones de firmware o las herramientas del proveedor pueden modificar pasos de configuración o formatos de comandos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de servidor de Plaspy, el TK418 envía mensajes de posición y eventos al endpoint y puerto compartido de Plaspy. Plaspy procesa estos mensajes del protocolo EELINK y los transforma en ubicaciones en tiempo real, eventos y reportes históricos para monitoreo y uso operativo.

- El rastreador envía soluciones de posición multi GNSS al endpoint y puerto de Plaspy.
- Datos de eventos como estado de ACC/ignición, alertas por choque o vibración y otras notificaciones se reenvían a Plaspy.
- El dispositivo debe apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 como servidor de destino.
- Los reportes pueden enviarse por UDP o TCP según el transporte seleccionado en la configuración del equipo.
- Plaspy detecta automáticamente el protocolo y analiza los mensajes EELINK entrantes para integrarlos en los paneles.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de EElink para el TK418, por ejemplo comandos SMS o el software de configuración de EElink.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el que Plaspy usa para todos los dispositivos soportados.
4. Seleccione el transporte UDP o TCP si el rastreador requiere la selección explícita.
5. Configure el APN del operador y cualquier credencial APN necesaria para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador lo solicita.
7. Valide que el dispositivo informe a Plaspy comprobando la conectividad en la plataforma y usando el comando de verificación de parámetros del equipo.

## Comandos de configuración de ejemplo

El TK418 admite configuración vía SMS. La secuencia pública a continuación muestra comandos SMS comunes para preparar el dispositivo para Plaspy. Mantenga los marcadores [apn], [apnu] y [apnp] al reemplazarlos por los valores de su operador.

- Restauración de fábrica opcional (usar solo cuando sea necesario para borrar configuración previa)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
Use el comando APN con los valores de su operador móvil. Reemplace [apn] por el nombre del APN. Si su operador solicita usuario o contraseña incluya [apnu] y [apnp].
```text
APN,[apn]#
```
O con usuario y contraseña opcionales
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy por dominio (forma legible recomendada)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy por dirección IP
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de reporte cada 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo
```text
PARAM#
```

Notas sobre los marcadores
- [apn] es el nombre del APN de su operador móvil. Reemplácelo por la cadena de APN proporcionada por su operador de SIM.
- [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN. Inclúyalos solo si su operador lo requiere.

## Notas de configuración

- La configuración por SMS es un método público común para el TK418; EElink también puede ofrecer herramientas alternativas o configuración por puerto serie.
- Las revisiones de firmware pueden cambiar la sintaxis de los comandos o las funciones disponibles. Si un comando no funciona como espera, verifique la versión de firmware del dispositivo y las notas de EElink.
- Elija UDP o TCP según sus necesidades de instalación. Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo entrante.
- El mismo puerto se usa para todos los dispositivos que se conectan a Plaspy, así que use consistentemente el puerto 8888 al agregar equipos.
- Confirme siempre el APN y las credenciales de red con su proveedor celular antes de aplicar ajustes.

## Por qué usar Plaspy con esta configuración

Configurar el TK418 para que reporte a Plaspy ofrece a administradores de flotas e integradores una forma confiable de recopilar datos multi GNSS, estado de ignición y alertas de eventos en una única plataforma para monitoreo en tiempo real y análisis histórico. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican el proceso de incorporación, de modo que los dispositivos puedan comenzar a enviar información con un conjunto pequeño de pasos públicos de configuración.

Para obtener más información sobre Plaspy y cómo la plataforma procesa datos de rastreadores visite https://www.plaspy.com. Verifique por favor los pasos de configuración específicos del dispositivo y el comportamiento del firmware en el sitio del fabricante https://www.eelink.com.cn/ ya que la documentación del proveedor y la sintaxis de comandos pueden cambiar con el tiempo.
