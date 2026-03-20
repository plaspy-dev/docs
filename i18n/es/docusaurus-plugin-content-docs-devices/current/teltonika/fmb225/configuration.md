---
slug: /teltonika/fmb225/configuration
id: fmb225-configuration
sidebar_label: Configuration
title: Teltonika - FMB225 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB225 con Plaspy usando los ajustes de servidor compartidos y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB225
  - Configuración FMB225
  - FMB225 Plaspy
  - Configuración de servidor FMB225
  - Configuración rastreador GPS Teltonika
  - Configuración de seguimiento de flotas
  - Integración rastreador GPS Plaspy
  - Teltonika Configurator
  - Configuración FOTA WEB
  - Configuración de rastreo de vehículos
---

# Teltonika - Configuración del FMB225

Esta página describe el contexto público de configuración para usar el Teltonika FMB225 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, muestra un ejemplo de comando tomado de los snippets públicos de configuración de Teltonika y detalla los pasos prácticos para registrar y validar el equipo en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los equipos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Las acciones específicas del fabricante para el FMB225 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere las instrucciones aquí como orientación práctica y verifique las acciones específicas del dispositivo en la documentación oficial de Teltonika.

## Resumen de la configuración

El objetivo de la configuración es preparar el FMB225 para enviar posición y telemetría a Plaspy usando el endpoint y el puerto compartidos de la plataforma. En la práctica, esto implica actualizar el APN y los ajustes de servidor del dispositivo, seleccionar el método de transporte si es necesario y validar que el rastreador reporte correctamente en Plaspy.

- Configure el APN y las credenciales del dispositivo para que pueda acceder a datos móviles y alcanzar el servidor de Plaspy.
- Establezca la dirección del servidor del rastreador en d.plaspy.com (o la IP del servidor) y fije el puerto común que usa Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) si su equipo requiere una elección explícita.
- Aplique o guarde la configuración y reinicie el dispositivo cuando sea necesario.
- Verifique que el dispositivo aparezca y reporte en Plaspy para confirmar la integración exitosa.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Asegúrese de que el FMB225 tenga una fuente de alimentación funcional y esté instalado o conectado según el manual del dispositivo.
- Una SIM con datos móviles válida configurada para conectividad 2G y con los datos APN correctos para su operador.
- Acceso al método oficial de configuración Teltonika que utilice en su entorno (Teltonika Configurator, FOTA WEB, SMS u otras herramientas soportadas).
- Tener a mano el IMEI o la identificación del dispositivo para registro y resolución de problemas.
- Firmware razonablemente actualizado y compatible con la documentación del método de configuración que vaya a usar.
- Validación básica de alcance de red para confirmar que el dispositivo puede contactar servidores externos.

## Cómo se conecta este rastreador a Plaspy

El FMB225 se configura para enviar su ubicación y telemetría a Plaspy enviando datos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunte a d.plaspy.com (o a la IP del servidor) en el puerto 8888, la plataforma de Plaspy acepta la conexión y determina automáticamente el protocolo correcto del rastreador para su procesamiento.

- El rastreador envía actualizaciones periódicas de posición al endpoint del servidor Plaspy.
- La telemetría y los eventos procedentes de interfaces seriales o entradas de impulso se reenvían a Plaspy junto con los datos GPS.
- El dispositivo usa el APN configurado para establecer la conectividad de datos móviles antes de reportar.
- La selección del protocolo de transporte (UDP o TCP) se aplica en el equipo si es necesario; Plaspy soporta ambos.
- Plaspy ingiere los mensajes y los asocia a su cuenta para que los dispositivos sean visibles en mapas en tiempo real e informes.

## Flujo común de configuración

1. Acceda al método o software oficial de Teltonika que use para el FMB225 (por ejemplo, Teltonika Configurator o FOTA WEB).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija UDP o TCP si el equipo requiere una selección de transporte.
5. Configure el APN y las credenciales para la SIM de modo que el rastreador pueda acceder a Internet.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la herramienta o el firmware lo requieren.
7. Valide que el dispositivo reporte en Plaspy comprobando que aparezca en línea y envíe actualizaciones de posición.

## Ejemplo de comandos de configuración

El siguiente comando es un lote de parámetros en estilo Teltonika, público, utilizado para establecer parámetros básicos de APN y servidor. Use el método de configuración adecuado para su entorno para introducir exactamente esta cadena de parámetros. Conserve y reemplace los marcadores por los valores de su operador.

- Ejemplo de comando en un solo lote

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y campos
- {{apn}} — sustituya por el nombre APN de su operador móvil.
- {{apnu}} — sustituya por el usuario APN si su operador lo requiere; deje en blanco si no es necesario.
- {{apnp}} — sustituya por la contraseña APN si su operador la requiere; deje en blanco si no es necesario.
- El comando establece el dominio del servidor en d.plaspy.com y el puerto del servidor en 8888, tal como exige Plaspy.
- El parámetro final 2006:1 aparece en el ejemplo público; consulte la documentación de Teltonika para conocer su significado exacto según su firmware o manténgalo si está documentado para su dispositivo.

## Notas de configuración

- Las versiones de firmware y las revisiones del dispositivo pueden cambiar los números de parámetros y los campos disponibles; verifique siempre el significado de los parámetros con la documentación de Teltonika para su firmware exacto.
- Elija TCP o UDP con intención: UDP suele tener menor sobrecarga mientras que TCP garantiza la entrega, pero el comportamiento depende de su red y del soporte del firmware.
- En configuraciones con doble SIM, asegúrese de la configuración correcta del APN por ranura o del mecanismo de conmutación automática de APN según lo admita su despliegue.
- Use Teltonika Configurator o FOTA WEB para actualizaciones masivas o remotas cuando administre flotas; estas herramientas facilitan aplicar ajustes coherentes en varios dispositivos.
- Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte al servidor y puerto configurados.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMB225 con Plaspy brinda a los equipos visibilidad fiable de activos remotos y resistentes, combinando el hardware robusto y las interfaces de telemetría del dispositivo con el seguimiento y los informes centralizados de Plaspy. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy garantiza una ingestión consistente de las transmisiones de posición y telemetría, permitiendo monitorización en tiempo real, alertas por eventos y análisis histórico a lo largo de la flota.

Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. Para los pasos específicos más actuales por dispositivo, el comportamiento de firmware y el significado de parámetros, consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar detalles que puedan cambiar con el tiempo.
