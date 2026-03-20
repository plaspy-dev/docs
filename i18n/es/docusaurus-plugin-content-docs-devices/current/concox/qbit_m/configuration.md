---
slug: /concox/qbit_m/configuration
id: qbit_m-configuration
sidebar_label: Configuration
title: Concox - Qbit M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar Concox Qbit M con Plaspy usando servidor compartido y ejemplos de SMS
keywords:
 - Configuración Concox Qbit M
 - Instalación Concox Qbit M
 - Configuración Qbit M Plaspy
 - Instalación rastreador GPS Concox
 - Comandos SMS Qbit M
 - Ajustes servidor Plaspy
 - Configuración rastreador personal
 - Integración rastreador GPS
 - Configuración LTE M
 - Configuración seguimiento de activos
---

# Concox - Qbit M Configuración

Esta página documenta el contexto público de configuración para usar el Concox Qbit M con Plaspy. Se concentra en los ajustes y comandos públicamente disponibles que puede aplicar para apuntar un dispositivo Qbit M hacia Plaspy, de modo que el rastreador envíe ubicaciones y eventos a su cuenta de Plaspy. Allí donde proceda se incluyen ejemplos de comandos SMS publicados para el Qbit M y se describe lo que usted debe preparar antes de integrar el equipo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos a la plataforma. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos a continuación como el flujo público y comúnmente usado en muchas implementaciones de Qbit M y verifique el comportamiento del dispositivo con la documentación actual de Concox.

## Resumen de la configuración

El objetivo de esta configuración es preparar el Qbit M para comunicarse de forma fiable con Plaspy estableciendo acceso de red, el endpoint de servidor correcto y los intervalos de reporte adecuados. Los comandos públicos para Qbit M se aplican habitualmente por SMS y configuran APN, dirección de servidor, temporizadores de reporte y modo GPRS para que el dispositivo entregue datos GNSS y de eventos a Plaspy.

- Configure el APN del operador móvil para que el dispositivo pueda acceder a servicios de datos GPRS o LTE.
- Apunte el rastreador al dominio o IP del servidor de Plaspy y utilice el puerto compartido para todos los dispositivos Plaspy.
- Establezca los intervalos de reporte para que las actualizaciones de posición se ajusten a sus necesidades de monitoreo.
- Active el modo GPRS o datos celulares para que el dispositivo envíe actualizaciones por la red móvil.
- Valide la configuración con un comando de verificación o confirmando que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos y usa el mismo puerto para todos los dispositivos soportados

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al configurar el Qbit M. Puede emplear ya sea el dominio d.plaspy.com o la dirección IP 54.85.159.138 y elegir UDP o TCP según la herramienta de configuración del dispositivo o el formato de comando SMS.

## Requisitos típicos antes de la configuración

- Una unidad Qbit M encendida y cargada con acceso a su interfaz de configuración por SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa con datos y con los detalles APN correctos para su operador móvil.
- Información del APN para la SIM, incluyendo nombre del APN y, si aplica, usuario y contraseña.
- La posibilidad de enviar comandos SMS al dispositivo desde un número de teléfono que el rastreador acepte como número administrador o de control configurado.
- Acceso a sus credenciales de cuenta Plaspy para validar que el dispositivo aparece en su panel de Plaspy tras la configuración.
- Conocimientos básicos sobre si el firmware del dispositivo prefiere UDP o TCP para la selección del transporte al servidor, si se solicita.

## Cómo se conecta este rastreador a Plaspy

El Qbit M envía posiciones GNSS y el estado del dispositivo a través de la red celular al endpoint de servidor de Plaspy para que la plataforma ingrese los datos en mapas, historial y reglas de alertas. Puntos de configuración como APN, dirección de servidor, tipo de transporte y temporizadores de reporte determinan con qué frecuencia y qué tan fiable el rastreador se comunica con Plaspy.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy mencionados arriba.
- Los reportes de posición y eventos se envían por la conexión de datos celulares una vez que GPRS o LTE está habilitado.
- Plaspy recibe las conexiones entrantes en el puerto común y detecta automáticamente el protocolo del rastreador.
- Los reportes aparecen en Plaspy para seguimiento en tiempo real, reproducción de historial y reglas de notificación.
- El reporte de eventos como pulsaciones del botón de pánico y batería baja puede reenviarse a Plaspy una vez aplicados los ajustes de servidor y temporizadores.

## Flujo común de configuración

1. Acceda al método oficial de configuración del Concox Qbit M, como la interfaz de comandos SMS del dispositivo o la herramienta del fabricante recomendada por Concox.
2. Establezca el APN para la SIM instalada usando los valores de APN proporcionados por su operador móvil.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y configure el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración y active GPRS o el modo de datos celulares en el dispositivo.
6. Reinicie el equipo si el dispositivo o el firmware requieren un reinicio para que los nuevos ajustes de red surtan efecto.
7. Valide que el dispositivo reporta a Plaspy comprobando su panel de Plaspy o usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El Qbit M soporta configuración vía SMS usando los comandos públicos mostrados aquí. Envíe cada línea como un SMS al rastreador desde un número autorizado. Preserve los marcadores de posición cuando sustituya credenciales APN.

- Reset inicial de fábrica opcional
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: mantenga el marcador de posición [apn] para el nombre del APN e incluya [apnu] y [apnp] si su operador requiere usuario y contraseña de APN. Reemplace los marcadores con los valores de su operador y elimine los campos de usuario y contraseña si no son necesarios.

- Configurar el servidor GPRS usando dominio y puerto (la selección UDP o TCP sigue el comportamiento del dispositivo)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS usando IP y puerto
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos (dos formatos aceptados)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Activar modo GPRS
```text
GPRSON,1#
```

- Verificar los parámetros actuales de GPRS y servidor
```text
GPRSSET#
```

Envíe los comandos en el orden indicado cuando el orden importe — por ejemplo, configure primero el APN, luego los ajustes de servidor, después el temporizador y finalmente active GPRS. El comando FACTORY# es opcional y sólo debe usarse si desea restaurar los valores de fábrica antes de configurar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros soportados; siempre verifique con las notas del firmware del dispositivo cuando estén disponibles.
- El Qbit M soporta configuración por SMS según la guía pública anterior; en algunas implementaciones puede preferirse la herramienta de configuración del fabricante o un servicio de aprovisionamiento.
- Elija UDP o TCP según la opción disponible en el comando SMS del dispositivo o en la herramienta de configuración; Plaspy acepta cualquiera de los dos en el puerto compartido.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que el valor de puerto 8888 es consistente entre configuraciones.
- Si usa el dominio d.plaspy.com, el dispositivo resolverá el dominio a la IP actual de Plaspy; la configuración directa por IP usa 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Usar el Concox Qbit M con Plaspy ofrece a organizaciones y responsables de cuidado una forma sencilla de centralizar datos de ubicación, eventos y alertas provenientes de rastreadores personales compactos en una plataforma de monitoreo. El Qbit M proporciona conectividad LTE‑M y posicionamiento GNSS, mientras que Plaspy ingiere y normaliza los reportes entrantes para que usted pueda construir mapas en tiempo real, reproducción de historial y reglas de notificación para seguridad y gestión ligera de activos.

Para obtener más información sobre Plaspy y cómo soporta integraciones de rastreadores visite https://www.plaspy.com. Recuerde que las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo, por lo que debe verificar la configuración y la sintaxis de comandos más recientes en el sitio de Concox https://www.iconcox.com/.
