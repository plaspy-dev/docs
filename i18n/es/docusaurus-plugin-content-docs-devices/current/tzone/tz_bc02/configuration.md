---
slug: /tzone/tz_bc02/configuration
id: tz_bc02-configuration
sidebar_label: Configuration
title: TZone - TZ-BC02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TZone TZ-BC02 para integrarlo con Plaspy, con comandos SMS y ajustes de servidor prácticos
keywords:
  - Configuración TZone TZ-BC02
  - Instalación TZone TZ-BC02
  - Integración TZ-BC02 con Plaspy
  - Configuración rastreador GPS TZone
  - Configuración servidor TZ-BC02
  - Configuración software de rastreo TZone
  - Comandos SMS GPRS TZ-BC02
  - Configuración de tracker Plaspy
  - Configuración Plaspy rastreador GPS
  - Configuración dispositivo TZ-BC02
---

# TZone - Configuración del TZ-BC02

Esta página documenta el contexto público de configuración para usar el rastreador TZone TZ-BC02 con Plaspy. Se centra en los pasos y comandos públicos y prácticos que se usan para apuntar el equipo a Plaspy, de modo que el rastreador pueda enviar ubicación y estado. La guía a continuación utiliza la descripción del dispositivo y los ejemplos de comandos SMS del fabricante que están disponibles públicamente.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Cuando se incluyen comandos SMS públicos, se muestran abajo; siempre verifique el firmware de su equipo y siga la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

El objetivo al configurar un TZ-BC02 para Plaspy es preparar el dispositivo para que envíe actualizaciones de ubicación y eventos al servidor de Plaspy usando el endpoint y puerto estándar de la plataforma. El TZ-BC02 puede configurarse por SMS con los comandos públicos mostrados en esta guía; esos comandos establecen el APN, el intervalo de reporte y el endpoint del servidor GPRS. Con el servidor y transporte correctos configurados, Plaspy detectará el protocolo automáticamente y mostrará el dispositivo en la plataforma.

- Configure el APN y credenciales del dispositivo para que pueda establecer sesión de datos GPRS
- Configure el dispositivo para que reporte al endpoint y puerto del servidor de Plaspy
- Establezca un intervalo de reporte adecuado para sus necesidades de monitoreo
- Active el modo de datos GPRS para que el dispositivo envíe actualizaciones a Plaspy
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el equipo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888

## Requisitos típicos antes de la configuración

- Un TZ-BC02 alimentado con batería suficiente o alimentación para completar la configuración inicial
- Una tarjeta SIM válida con un plan de datos activo y el APN correcto de su operador móvil
- Capacidad para enviar SMS al dispositivo desde un número autorizado si usa configuración por SMS
- Acceso al formato de comandos SMS públicos o a la herramienta de configuración del fabricante para el TZ-BC02
- Conocimiento del APN y, opcionalmente, del usuario y contraseña del APN proporcionados por su operador móvil
- Permiso para reiniciar o cortar temporalmente la energía del dispositivo durante la configuración

## Cómo se conecta este rastreador a Plaspy

El TZ-BC02 se configura para establecer una conexión GPRS y enviar actualizaciones de ubicación al endpoint del servidor Plaspy en d.plaspy.com (54.85.159.138) en el puerto 8888. Plaspy recibe los datos del dispositivo y determina automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo manualmente en la plataforma.

- El dispositivo usa GPRS para abrir una conexión de datos y enviar paquetes de seguimiento a d.plaspy.com
- Los paquetes se entregan a Plaspy en 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la capacidad del dispositivo y la configuración elegida
- Plaspy inspecciona el tráfico entrante y detecta automáticamente el protocolo del rastreador
- Una vez configurado y conectado, el dispositivo se vuelve visible en la plataforma Plaspy para monitoreo e informes

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante o al software documentado por TZone, por ejemplo el conjunto de comandos SMS para el TZ-BC02.
2. Asegúrese de que el TZ-BC02 tenga una SIM funcional con el APN correcto y que usted pueda enviar SMS al dispositivo.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Configure el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique los cambios por SMS o software, como establecer APN, intervalo de actualización y la entrada del servidor GPRS.
6. Reinicie o aplique un ciclo de energía al dispositivo si el fabricante lo requiere para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando la lista de dispositivos y la actividad reciente en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El TZ-BC02 soporta configuración vía SMS. Los siguientes comandos SMS públicos se encuentran en la documentación del fabricante y deben enviarse desde un número autorizado al dispositivo. Conserve los marcadores de posición cuando reemplace con los valores de su operador.

1. Establecer el APN del operador
- Use este comando para definir el APN y el usuario y contraseña opcionales del APN. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] respectivamente.

```
*000000,011,[apn],[apnu],[apnp]#
```

- Si no se requiere usuario ni contraseña del APN, envíe:

```
*000000,011,[apn]#
```

2. Establecer el intervalo de actualización a 60 segundos
- Esto define el intervalo de reporte periódico. El ejemplo a continuación establece un intervalo de 60 segundos.

```
*000000,018,60,999#
```

3. Establecer el servidor GPRS a Plaspy
- Use la IP y el puerto de Plaspy. Este ejemplo usa la IP pública de Plaspy y el puerto 8888.

```
*000000,015,0,54.85.159.138,8888#
```

- Alternativamente, si su dispositivo acepta el nombre de dominio, puede configurar d.plaspy.com cuando el firmware lo permita. Si tiene dudas, use la IP mostrada arriba.

4. Activar modo GPRS
- Habilite GPRS para que el dispositivo pueda conectarse y enviar datos.

```
*000000,016,1#
```

Notas sobre estos comandos
- El orden importa: configure primero el APN, luego el servidor y el intervalo de reporte, y finalmente active GPRS.
- El prefijo 000000 en estos ejemplos es la contraseña de comando del dispositivo mostrada en ejemplos públicos. Verifique la contraseña de su equipo antes de enviar comandos.
- Marcadores de posición: [apn] es el APN del operador móvil, [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Omita usuario y contraseña si no son requeridos.

## Notas de configuración

- La configuración por SMS es compatible y se usa comúnmente para la configuración inicial; siga el formato exacto de comandos que coincida con el firmware de su dispositivo.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el soporte de comandos y los parámetros aceptados; verifique los comandos con la documentación del fabricante.
- Elija UDP o TCP según la confiabilidad de la red y el soporte del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente cuando el dispositivo se conecta.
- Aplique los ajustes en el orden recomendado: APN primero, servidor e intervalo después, active GPRS y finalmente reinicie si es necesario.
- Tras la configuración, espere un breve período para que el dispositivo establezca la sesión GPRS y comience a reportar a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el TZ-BC02 ofrece a las organizaciones un endpoint y puerto consistentes para recopilar datos de ubicación de los rastreadores soportados. Dado que Plaspy utiliza un único puerto y detección automática de protocolo, integrar un equipo como el TZ-BC02 es un proceso sencillo una vez que se aplican correctamente el APN y los ajustes de servidor.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo, cambios de firmware y referencia de comandos para el TZ-BC02 verifique la información actual en el sitio del fabricante http://www.tzonedigital.com/ que puede contener actualizaciones más allá del contenido público mostrado aquí.
