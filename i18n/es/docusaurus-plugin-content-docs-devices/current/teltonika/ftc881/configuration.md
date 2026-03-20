---
slug: /teltonika/ftc881/configuration
id: ftc881-configuration
sidebar_label: Configuration
title: Teltonika - FTC881 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FTC881 y conectarlo a Plaspy usando servidor compartido y comandos de ejemplo
keywords:
  - Configuración Teltonika FTC881
  - Configuración FTC881 para Plaspy
  - Configuración de servidor FTC881
  - Configuración del rastreador GPS FTC881
  - Rastreador Teltonika Plaspy
  - Guía de instalación FTC881
  - Configuración de plataforma para FTC881
  - Configuración de plataforma Teltonika FT
  - Configuración APN FTC881
  - Seguimiento de flotas FTC881
---

# Teltonika - Configuración del FTC881

Esta página ofrece información pública para configurar el Teltonika FTC881 con Plaspy. Reúne los datos del servidor compartido de Plaspy y un ejemplo práctico de comando recomendado para el FTC881, para que prepare sus dispositivos y los haga visibles en los paneles de Plaspy.

Plaspy utiliza un conjunto de ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario elegir un puerto distinto por dispositivo. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas Teltonika que use para la configuración. El comando setparam que se muestra más adelante es un ejemplo común en lotes de parámetros de Teltonika y se incluye aquí como referencia pública.

## Resumen de la configuración

El objetivo al configurar un FTC881 para Plaspy es apuntar el equipo al endpoint compartido de Plaspy, asegurar que tenga conectividad de datos celulares y validar que el rastreador reporte correctamente a la plataforma. Esto prepara la unidad para seguimiento en tiempo real, notificaciones de eventos y análisis histórico de rutas.

- Configure el rastreador para que reporte a Plaspy usando el dominio o la IP y el puerto compartido proporcionados.
- Ajuste el APN y cualquier autenticación celular requerida para que el dispositivo tenga acceso a datos.
- Seleccione UDP o TCP como transporte si el dispositivo lo requiere y guarde el cambio.
- Valide la conectividad y que Plaspy reciba los primeros reportes de posición para confirmar visibilidad.
- Use las herramientas de Teltonika o comandos SMS en lote para aplicar ajustes a múltiples dispositivos en despliegues de flota.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para el reporte de dispositivos y la ingestión en la plataforma
- IP del servidor 54.85.159.138 como endpoint alternativo para dispositivos que requieren una dirección IP
- Puerto 8888 utilizado por Plaspy para todos los dispositivos soportados
- Soporte de transporte por UDP o TCP según los requisitos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador por lo que se utiliza un puerto compartido para todos los equipos

## Requisitos típicos antes de la configuración

- Un FTC881 cargado e instalado con acceso a su interfaz de configuración o la capacidad de enviar comandos SMS
- Una SIM celular activa con un APN válido y plan de datos adecuado para telemetría
- Acceso a los métodos de configuración Teltonika como TCT, FOTA WEB o la capacidad de enviar comandos SMS
- Conocimiento de la instalación en el vehículo o activo para que entradas, alimentación y ubicación de la antena sean correctas
- Una lista de identificadores del dispositivo como el IMEI para poder confirmar el rastreador específico en Plaspy una vez que empiece a reportar
- Acceso administrativo para aplicar configuraciones y reiniciar el dispositivo si es necesario

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FTC881 envía posiciones GNSS y telemetría del dispositivo a través de la red celular al endpoint y puerto del servidor Plaspy. Plaspy recibe esos mensajes, determina automáticamente el protocolo del rastreador y mapea los datos entrantes en la plataforma para uso en tiempo real e histórico.

- El dispositivo se configura para reportar al endpoint compartido d.plaspy.com o a 54.85.159.138
- Los datos se transmiten por el puerto 8888, que Plaspy usa para todos los dispositivos compatibles
- Puede elegir UDP o TCP como transporte si el dispositivo requiere una selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a procesar los mensajes cuando llegan
- Una conexión exitosa habilita seguimiento en vivo, alertas de eventos y visibilidad de telemetría en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Teltonika que prefiera, como TCT, FOTA WEB o comandos SMS.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el firmware del rastreador requiere seleccionar un tipo de transporte.
5. Configure el APN y las credenciales celulares necesarias para que el dispositivo acceda a la red móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método o el firmware exige un reinicio.
7. Valide que el FTC881 reporte a Plaspy confirmando mensajes entrantes o actualizaciones de posición para el IMEI del dispositivo en la plataforma.

## Comandos de configuración de ejemplo

Los dispositivos Teltonika aceptan comúnmente comandos de parámetros por lote. El siguiente ejemplo público establece valores de APN y apunta el dispositivo a Plaspy usando el nombre de dominio y el puerto. Conserve los marcadores de posición cuando los reemplace por sus valores reales de APN.

- Ejemplo de comando setparam por lote de Teltonika

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores y campos
  - [apn] marcadores para el nombre del APN de su tarjeta SIM
  - [apnu] marcador para el nombre de usuario del APN si el operador lo requiere
  - [apnp] marcador para la contraseña del APN si el operador lo requiere
  - 2004 configura el dominio del servidor a d.plaspy.com
  - 2005 configura el puerto a 8888
  - 2006 se usa comúnmente para ajustar transporte o flags de activación según el firmware; consulte la documentación de Teltonika para el significado exacto de este parámetro en su versión de firmware

Nota: Use el canal de configuración Teltonika apropiado para su dispositivo y firmware. El comando anterior es un ejemplo público y debe aplicarse según la documentación de Teltonika para su modelo y versión de firmware.

## Notas de configuración

- Las versiones de firmware y los índices de parámetros de Teltonika pueden variar; confirme siempre los números y significados de los parámetros con la documentación actual de Teltonika para el FTC881 antes de aplicar cambios.
- Puede usar tanto d.plaspy.com como 54.85.159.138 como valor de servidor; elija la forma requerida por su herramienta de configuración o flujo de comandos SMS.
- Seleccione UDP o TCP según las opciones del firmware del rastreador y las consideraciones de red; Plaspy detectará automáticamente el protocolo usado.
- Para despliegues de flota, aplique los ajustes mediante Teltonika TCT, FOTA WEB o comandos SMS en lote para reducir el tiempo de configuración manual.
- Verifique el reporte del dispositivo monitoreando el IMEI u otro identificador en Plaspy después de la configuración inicial y reinicie si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el FTC881 con Plaspy ofrece una vía sencilla para obtener visibilidad continua y telemetría de vehículos y activos pesados. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy facilita la incorporación masiva de equipos, mientras Plaspy gestiona la detección de protocolo y la ingestión de datos, habilitando mapas en vivo, alertas e informes históricos.

Para más información sobre Plaspy y cómo funciona la plataforma con rastreadores Teltonika visite https://www.plaspy.com. Para parámetros de dispositivo más recientes, comportamiento de firmware y detalles de instalación oficiales consulte la documentación de Teltonika en https://www.teltonika-gps.com/ para verificar instrucciones y listas de parámetros específicas del dispositivo.
