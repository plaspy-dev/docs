---
slug: /teltonika/fmc130/configuration
id: fmc130-configuration
sidebar_label: Configuration
title: Teltonika - FMC130 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Teltonika FMC130 para Plaspy con ajustes de servidor, comandos de ejemplo y pasos prácticos para un seguimiento de flotas confiable
keywords:
  - Configuración Teltonika FMC130
  - Configuración FMC130 Plaspy
  - Configuración servidor Teltonika FMC130
  - Configuración rastreador GPS FMC130
  - Configuración rastreador Teltonika
  - Configuración dispositivo Plaspy
  - Seguimiento vehicular FMC130
  - Gestión de flotas FMC130
  - Ajustes APN Teltonika FMC130
  - Configuración SMS FMC130
---

# Teltonika - Configuración del FMC130

Esta página documenta el contexto público de configuración para usar el Teltonika FMC130 con la plataforma Plaspy. Reúne los ajustes del servidor Plaspy que necesitará, explica el flujo práctico de configuración y muestra un comando de ejemplo usado para aplicar parámetros básicos al rastreador. Use estas indicaciones para preparar el FMC130 para que reporte a Plaspy; siga las herramientas del fabricante y la documentación oficial para pasos específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante varían según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika que utilice. El FMC130 es un rastreador orientado a telemetría con 4G LTE Cat 1 y conmutación a 2G, batería de respaldo interna, entrada por impulsos para medidores de combustible, compatibilidad con adaptador CAN y soporte Bluetooth LE — detalles que influyen en cómo configure la conectividad y la telemetría para Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar el FMC130 para comunicarse de manera fiable con Plaspy, asegurando que la ubicación y la telemetría fluyan hacia la plataforma para seguimiento en vivo y reportes. El proceso se centra en establecer el APN y el endpoint del servidor, seleccionar el transporte y validar que los paquetes lleguen a Plaspy.

- Configure el APN y las credenciales de la red celular para que el dispositivo pueda establecer una conexión de datos.
- Ajuste el FMC130 para que reporte a Plaspy usando el endpoint y puerto compartidos del servidor.
- Elija UDP o TCP cuando el dispositivo requiera una selección y guarde la configuración.
- Verifique que el dispositivo sea visible en Plaspy y que la telemetría como entrada por impulsos y datos CAN se estén registrando.
- Use el comando de ejemplo más abajo como referencia rápida para establecer el APN y los valores del servidor Plaspy mediante el método soportado por el fabricante.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo del rastreador automáticamente cuando el FMC130 envíe datos al endpoint configurado.

## Requisitos habituales antes de la configuración

- Acceso al FMC130 y al método de configuración Teltonika que planea usar (comandos SMS, Teltonika Configurator o FOTA WEB cuando aplique).
- Un dispositivo instalado y con alimentación, con una tarjeta SIM funcional y servicio de datos activo (con APN y credenciales disponibles).
- Conocer el APN de su operador, nombre de usuario y contraseña para completar los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}}.
- Una forma de reiniciar o cortar la alimentación del dispositivo si las pruebas de firmware o conexión requieren un reinicio.
- Acceso a la cuenta Plaspy o instrucciones de onboarding para poder confirmar la visibilidad del dispositivo después de la configuración.
- Documentación del fabricante sobre notas de firmware y referencia de parámetros del FMC130.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMC130 envía posición y telemetría a través del enlace de datos celular al endpoint y puerto compartidos del servidor Plaspy. Plaspy recibe y normaliza los datos entrantes para que los administradores de flota puedan ver ubicación en tiempo real, telemetría y alertas basadas en eventos.

- El rastreador informa al servidor Plaspy en el dominio d.plaspy.com (o la IP 54.85.159.138) en el puerto 8888.
- Elija UDP o TCP en el dispositivo cuando sea necesario; Plaspy acepta ambos y detectará el protocolo automáticamente.
- La telemetría como conteos por impulso, señales provenientes del CAN y datos de sensores BLE se incluyen en los reportes regulares a Plaspy una vez que el reporte está activo.
- Plaspy procesa los paquetes entrantes para seguimiento en vivo, reproducción histórica y generación de alertas.
- La validación en Plaspy confirma que el dispositivo está conectado y enviando los campos de telemetría esperados.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Teltonika que prefiera (SMS, Teltonika Configurator o FOTA WEB) para modificar parámetros del dispositivo.
2. Ingrese las credenciales del APN de su operador donde corresponda, usando marcadores como {{apn}}, {{apnu}} y {{apnp}}.
3. Configure la dirección del servidor ingresando d.plaspy.com o la IP 54.85.159.138 en el parámetro de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración y envíe los comandos por lote o SMS necesarios para confirmar los cambios.
6. Reinicie o haga ciclo de energía del FMC130 si el método de configuración o el firmware exige un reinicio para comenzar a reportar.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta Plaspy con la telemetría y eventos esperados.

## Comandos de ejemplo para configuración

El siguiente ejemplo es un formato de comando por lote común de Teltonika usado para establecer parámetros básicos, incluidos las credenciales APN y el endpoint del servidor Plaspy. Este ejemplo conserva los marcadores de posición para los valores del APN; reemplace {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador móvil.

- Ejemplo de comando por lote vía SMS para configurar APN y valores del servidor Plaspy

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de los marcadores:
- {{apn}} — nombre del APN de datos celulares
- {{apnu}} — nombre de usuario APN si su operador lo requiere
- {{apnp}} — contraseña APN si su operador la requiere

Este comando establece los campos APN del dispositivo y asigna el dominio del servidor Plaspy d.plaspy.com con el puerto 8888. El parámetro 2006 en el ejemplo forma parte de la plantilla de comandos del fabricante; confirme el significado exacto y la selección de transporte en la referencia de parámetros del FMC130 en la documentación oficial de Teltonika antes de usarlo.

## Notas de configuración

- Diferentes versiones de firmware del FMC130 y variantes regionales de hardware pueden usar IDs de parámetros o sintaxis de comandos ligeramente distintas; confirme siempre la referencia de parámetros para la versión de firmware de su dispositivo.
- El FMC130 admite métodos de configuración vía SMS y por software. Use el método que coincida con su flujo de instalación y requisitos de seguridad.
- Si el dispositivo solicita selección de transporte, elija UDP o TCP acorde con su red y las recomendaciones de Teltonika; Plaspy acepta ambos en el puerto 8888.
- Use las herramientas del fabricante para despliegues masivos o de flota y evite errores manuales al aplicar los ajustes de servidor y APN.
- Guarde una copia de los ajustes aplicados y pruebe la conectividad después de la configuración para validar que Plaspy reciba la telemetría esperada.

## Por qué usar Plaspy con esta configuración

Usar el FMC130 con Plaspy brinda a los operadores de flota una canalización de telemetría confiable para seguimiento en tiempo real, monitoreo de combustible y control remoto de inmovilizadores. La combinación de la entrada por impulsos para combustible del FMC130, integración CAN, soporte para sensores BLE y batería de respaldo interna lo hace adecuado para operaciones que requieren visibilidad continua y telemetría exhaustiva en Plaspy.

Para conocer más sobre Plaspy y ver cómo su flota puede beneficiarse de esta configuración, visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, el comportamiento del firmware y las referencias de parámetros, verifique los detalles con el fabricante en https://www.teltonika-gps.com/
