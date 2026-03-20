---
slug: /teltonika/fmm800/configuration
id: fmm800-configuration
sidebar_label: Configuration
title: Teltonika - FMM800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar un Teltonika FMM800 a Plaspy con valores de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMM800
  - Configuración FMM800
  - Configuración FMM800 Plaspy
  - Configuración rastreador GPS FMM800
  - Configuración servidor Teltonika
  - Configuración rastreo flotas
  - Configuración rastreador OBD II
  - Configuración seguimiento vehicular
  - Configuración rastreador Plaspy
  - Guía Teltonika Configurator
---

# Teltonika - Configuración FMM800

Esta página documenta el contexto público de configuración para usar el Teltonika FMM800 con Plaspy. Se enfoca en los ajustes compartidos del servidor y en pasos prácticos para apuntar el rastreador a Plaspy y así recibir ubicaciones y telemetría en tiempo real. La orientación aquí refleja los valores públicos del servidor de Plaspy y un ejemplo de comando tipo SMS habitualmente utilizado con dispositivos Teltonika.

Plaspy utiliza el mismo endpoint y puerto en todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta de aprovisionamiento Teltonika que utilice. El FMM800 es una unidad plug and play OBD II que soporta aprovisionamiento remoto mediante herramientas Teltonika y también puede aceptar comandos tipo SMS para actualizaciones básicas de parámetros.

## Resumen de la configuración

Este proceso prepara un FMM800 para comunicarse con Plaspy configurando el APN del equipo y el endpoint del servidor Plaspy para que el rastreador envíe ubicación y telemetría a la plataforma. El ejemplo de comando a continuación muestra cómo se suelen establecer las credenciales APN y los datos del servidor en dispositivos Teltonika.

- Configure las credenciales APN del equipo para que el rastreador pueda acceder a la red de datos móviles.
- Establezca el endpoint del servidor apuntando al dominio de Plaspy d.plaspy.com y al puerto correspondiente.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo requiere una elección explícita.
- Guarde y aplique la configuración para que el equipo comience a reportar a Plaspy y sea visible en la plataforma.
- Valide la conectividad y el reporte para confirmar que el rastreador está enviando ubicación y telemetría a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD II del vehículo para alimentar e instalar el FMM800.
- Una tarjeta SIM activa y un plan de datos móviles compatible con el dispositivo y las redes regionales.
- Acceso a herramientas de configuración Teltonika, como Teltonika Configurator o Teltonika FOTA WEB, o una vía de aprovisionamiento por SMS si está disponible.
- El APN correcto, el usuario APN y la contraseña APN del operador móvil que sirve la SIM.
- Conocimientos básicos sobre si su instalación prefiere transporte UDP o TCP para la telemetría.
- Capacidad para reiniciar o cortar la alimentación del dispositivo después de aplicar la configuración, si el firmware del equipo lo requiere.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMM800 envía telemetría GNSS y derivada de OBD al endpoint de Plaspy para que la plataforma procese ubicación en vivo, alertas y datos históricos. El equipo se configura para reportar al endpoint y puerto compartidos de Plaspy, lo que permite que la plataforma ingiera y muestre los datos del vehículo en paneles y reportes.

- El rastreador usa la conectividad celular y el APN configurado para abrir una sesión de datos.
- Los paquetes de telemetría y ubicación se dirigen a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según su configuración; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Plaspy recibe la telemetría y muestra el dispositivo en la plataforma para seguimiento en vivo y alertas.
- Los reportes de estado y eventos del equipo están disponibles en Plaspy para monitoreo operativo.

## Flujo común de configuración

1. Acceda al método de configuración Teltonika que prefiera, como Teltonika Configurator, FOTA WEB o la interfaz de aprovisionamiento por SMS del equipo.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como IP 54.85.159.138 en el campo de servidor u host.
3. Establezca el puerto del servidor en 8888 para coincidir con el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte en sus ajustes.
5. Introduzca las credenciales APN para la SIM usando la herramienta de aprovisionamiento del equipo o mediante comando SMS.
6. Aplique o guarde la configuración y realice un reinicio o ciclo de energía si el firmware del dispositivo lo requiere.
7. Valide que el equipo reporte a Plaspy comprobando el estado en la plataforma y confirmando la telemetría entrante.

Siga estos pasos en el orden que corresponda según la herramienta de aprovisionamiento elegida. El comando de ejemplo tipo SMS que aparece a continuación ilustra un conjunto común de parámetros por lotes usado en dispositivos Teltonika.

## Comandos de configuración de ejemplo

El siguiente ejemplo público muestra un comando de parámetros por lotes de Teltonika usado para establecer credenciales APN y el endpoint del servidor en dispositivos compatibles. Conserve los marcadores de posición y reemplácelos con sus valores de red.

- Ejemplo de comando SMS o batch setparam

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de los marcadores de posición y campos
- [apn] Reemplace con el nombre del APN de la red móvil para la SIM.
- [apnu] Reemplace con el usuario APN si lo requiere el operador. Deje vacío si no es necesario.
- [apnp] Reemplace con la contraseña APN si lo requiere el operador. Deje vacío si no es necesario.
- 2004 en el comando está establecido en d.plaspy.com, el dominio de Plaspy usado para reporte.
- 2005 en el comando está establecido en 8888, el puerto de Plaspy usado en todos los dispositivos.
- 2006 en este ejemplo selecciona un modo de transporte. Verifique los valores numéricos para UDP o TCP en la documentación Teltonika o en la referencia de parámetros del dispositivo según su firmware.

Si su flujo de aprovisionamiento requiere la IP del servidor en lugar del dominio, puede sustituir d.plaspy.com por 54.85.159.138 en el mismo formato de comando. Verifique siempre los valores numéricos correctos para la selección de transporte en la documentación de Teltonika.

## Notas de configuración

- Las versiones de firmware de Teltonika y los códigos de parámetros pueden variar; confirme los números de parámetro y los valores aceptados en Teltonika Configurator o en la referencia de parámetros oficial para su revisión de firmware.
- El comando de ejemplo muestra el aprovisionamiento por SMS o por lotes, que es comúnmente compatible con las herramientas Teltonika; use Teltonika Configurator o FOTA WEB para aprovisionamiento centralizado a escala.
- Elija UDP o TCP de acuerdo con sus necesidades de red y operativas; Plaspy admite ambos y detecta el protocolo automáticamente cuando el rastreador se conecta.
- Conserve marcadores de posición como [apn] [apnu] y [apnp] al preparar comandos y reemplácelos por las credenciales de su operador antes de enviarlos.
- Tras aplicar los ajustes, valide la conectividad y la telemetría en Plaspy para asegurar que el equipo sea visible y reporte según lo esperado.

## Por qué usar Plaspy con esta configuración

Usar el FMM800 con Plaspy ofrece a las organizaciones una forma de bajo esfuerzo para recopilar ubicación de vehículos y telemetría basada en OBD mediante un dispositivo OBD II plug and play. Apuntar el rastreador a Plaspy con los ajustes de servidor compartidos permite que sus flujos de trabajo de gestión de flotas, alertas y reportes utilicen los datos del equipo sin una configuración de servidor personalizada por dispositivo.

Learn more about Plaspy and how it can centralize tracking and telemetry for your deployment at https://www.plaspy.com. For the most current device specific parameter names firmware details and configuration instructions verify the manufacturer documentation at https://www.teltonika-gps.com/ before making broad deployment changes.
