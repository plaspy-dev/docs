---
slug: /carscop/cctr_828_4g/configuration
id: cctr_828_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-828-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CCTR-828-4G con ajustes de servidor Plaspy y comandos SMS para integración GPRS
keywords:
  - Configuración Carscop CCTR-828-4G
  - Instalación Carscop CCTR-828-4G
  - Configuración del tracker Carscop
  - Configuración Plaspy CCTR-828-4G
  - Configuración de servidor CCTR-828-4G
  - Configuración tracker GPS Carscop
  - Configuración tracker Plaspy
  - Configuración rastreador GPS vehículo
  - Seguimiento de flotas CCTR-828-4G
  - Configuración GPRS abierta del tracker
---

# Carscop - Configuración del CCTR-828-4G

Esta página documenta el contexto público de configuración para usar el tracker Carscop CCTR-828-4G con Plaspy. Se centra en la información práctica de servidor y los ajustes por SMS que los operadores suelen utilizar para apuntar el equipo a Plaspy y habilitar las subidas de telemetría. Use esta guía para comprender los ajustes clave del servidor y los ejemplos de comandos SMS que proporciona el fabricante.

Plaspy emplea ajustes de servidor compartidos entre los trackers compatibles y detecta automáticamente el protocolo del dispositivo cuando la unidad se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor, por lo que confirme los pasos específicos del dispositivo en la documentación de Carscop si tiene dudas. El CCTR-828-4G admite configuración GPRS abierta y comandos SMS, que se usan comúnmente para establecer el APN, servidor y comportamiento básico para la integración con Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el CCTR-828-4G para comunicarse de forma fiable con Plaspy, validar la conectividad y hacer que el dispositivo sea visible en la plataforma Plaspy. Esto implica configurar el APN de la red, apuntar el dispositivo al endpoint y puerto del servidor Plaspy, y habilitar que el tracker permanezca en línea para reportes.

- Configure el APN del dispositivo y, si aplica, las credenciales de APN para que el tracker pueda usar la red de datos móviles para subidas GPRS.
- Configure el tracker para reportar al endpoint y puerto del servidor Plaspy para que Plaspy reciba telemetría y actualizaciones de ubicación.
- Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección y asegúrese de que el puerto coincida con la configuración estándar de Plaspy.
- Valide la conectividad y el comportamiento de keepalive para que el tracker permanezca registrado y visible en Plaspy.
- Use los comandos SMS proporcionados para dispositivos que admiten configuración por SMS y aplicar ajustes sin desarmar la unidad.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta

Estos valores son los detalles públicos del endpoint de Plaspy usados para apuntar el CCTR-828-4G a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo correspondiente de forma automática.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional con datos habilitados y, si se requiere, servicio SMS para comandos de configuración.
- Acceso al método de configuración por SMS del tracker o a la herramienta oficial de configuración del fabricante.
- El dispositivo alimentado y accesible (con alimentación del vehículo o una fuente externa) para que pueda recibir SMS y establecer GPRS.
- El APN, nombre de usuario del APN y contraseña del APN proporcionados por su operador móvil si el APN de la SIM no es automático.
- Conocimiento básico de la contraseña del dispositivo; la contraseña por defecto usada en los ejemplos del fabricante es 123456.
- Una forma de verificar los reportes del dispositivo en Plaspy después de la configuración, como una cuenta con acceso a la plataforma o una consola de partner.

## Cómo se conecta este tracker a Plaspy

El CCTR-828-4G está configurado para subir ubicación y telemetría mediante GPRS sobre la red celular. Una vez que el dispositivo está apuntado a Plaspy y el APN está configurado, el tracker establecerá una conexión al endpoint y puerto compartido de Plaspy para entregar actualizaciones en tiempo real y notificaciones de eventos.

- El tracker se configura para reportar al endpoint y puerto compartido de Plaspy como parte de sus ajustes de servidor GPRS.
- La telemetría y las actualizaciones de ubicación del dispositivo se envían a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy escucha en el puerto 8888 y detecta el protocolo automáticamente.
- Plaspy recibe y procesa las subidas para visibilidad en tiempo real, reporte de eventos y reproducción de historial.
- Comandos de keepalive o de permanencia en línea aseguran que el dispositivo siga siendo alcanzable y continúe reportando a Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Carscop para su unidad, normalmente comandos SMS o la herramienta/app del fabricante.
2. Asegúrese de que el dispositivo tenga alimentación y una SIM activa con datos y, opcionalmente, capacidad SMS.
3. Ingrese el servidor de Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Configure el puerto en 8888, que es el puerto estándar que Plaspy utiliza para todos los dispositivos.
5. Seleccione UDP o TCP si el dispositivo requiere elegir un protocolo de transporte.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie el tracker para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy verificando el estado y la telemetría en su cuenta de Plaspy.

Si el CCTR-828-4G admite configuración por SMS (como se muestra abajo), enviar los comandos en el orden indicado establecerá los parámetros más comunes para la integración con Plaspy.

## Ejemplos de comandos de configuración

El fabricante proporciona comandos SMS para la configuración. Los comandos de ejemplo a continuación usan la contraseña por defecto del dispositivo 123456. Conserve y reemplace los marcadores donde sea necesario.

1. Restaurar configuración de fábrica (paso inicial opcional)
```
RESET*123456
```

2. Configurar la zona horaria a UTC+0
```
TIMEZONE*123456*+00
```

3. Establecer el APN del operador (reemplazar [apn] por el APN de su operador)
```
APN*123456*[apn]
```

4. Establecer usuario y contraseña del APN si son requeridos (reemplazar [apnu] y [apnp] por sus credenciales)
```
USERNAME*123456*[apnu]*[apnp]
```

5. Configurar el servidor GPRS por IP y puerto hacia el servidor Plaspy
```
IP*123456*54.85.159.138,8888
```
Nota: Si el dispositivo acepta un nombre de dominio en lugar de una IP, puede usar d.plaspy.com en lugar de la IP.

6. Habilitar comportamiento de mantener en línea para que el tracker permanezca conectado
```
KEEPONLINE*123456
```

Explicación de los marcadores:
- [apn] — cadena del APN del operador necesaria para la conexión de datos.
- [apnu] — nombre de usuario del APN opcional.
- [apnp] — contraseña del APN opcional.

Use estos comandos SMS en el orden mostrado cuando realice la configuración inicial. El comando RESET es opcional y se usa normalmente solo cuando se desea devolver el dispositivo a los valores de fábrica antes de reconfigurarlo.

## Notas de configuración

- La configuración por SMS es compatible con el CCTR-828-4G y se usa con frecuencia para establecer APN, IP de servidor y comportamiento de keepalive.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; confirme los comandos SMS exactos en el manual del dispositivo de su unidad.
- Elija UDP o TCP según la preferencia del instalador o la capacidad del dispositivo; Plaspy escucha en el puerto 8888 y detecta el protocolo automáticamente.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el despliegue en flotas.
- Si su unidad admite el uso de un nombre de dominio para los ajustes de servidor, d.plaspy.com puede usarse en lugar de la dirección IP numérica.

## Por qué usar Plaspy con esta configuración

Usar el Carscop CCTR-828-4G con Plaspy brinda a los operadores visibilidad centralizada de la ubicación del vehículo, reporte de eventos y reproducción de historial, usando un flujo de configuración sencillo y probado. Apuntar el dispositivo al servidor Plaspy y configurar el APN y las opciones de keepalive proporciona un canal fiable para telemetría en tiempo real y monitoreo operativo en flotas heterogéneas.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device-specific setup steps, firmware notes, and manufacturer documentation verify details at the Carscop website http://www.carscop.com/ as manufacturer specifications and setup methods can change over time.
