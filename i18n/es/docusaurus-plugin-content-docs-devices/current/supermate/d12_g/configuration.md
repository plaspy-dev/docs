---
slug: /supermate/d12_g/configuration
id: d12_g-configuration
sidebar_label: Configuration
title: Supermate - D12-G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Supermate D12 G y conectarlo al servidor Plaspy con pasos y notas prácticas
keywords:
  - Configuración Supermate D12 G
  - Configuración D12 G
  - Tracker Supermate Plaspy
  - Configuración servidor D12 G
  - Configuración GPS D12 G
  - Configuración seguimiento de flotas
  - Guía de configuración rastreador de activos
  - Guía integración Plaspy
  - Configuración plataforma GPS
  - Configuración rastreo de vehículos
---

# Supermate - D12-G Configuración

Esta página describe el contexto público de configuración para usar el tracker Supermate D12-G con Plaspy. Reúne los ajustes de servidor prácticos, los pasos habituales del flujo de trabajo y las consideraciones de instalación más comunes al integrar este modelo con la plataforma Plaspy. Use esta guía junto con la documentación del dispositivo proporcionada por el fabricante para instrucciones específicas del equipo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los procedimientos específicos del dispositivo antes de aplicar cambios. La serie Supermate D12 está diseñada para seguimiento en tiempo real, geocercas y alertas SOS; esas funciones suelen estar disponibles una vez que el dispositivo está configurado para reportar al endpoint del servidor Plaspy.

## Resumen de configuración

Esta configuración prepara un Supermate D12-G para comunicarse de forma confiable con la plataforma de rastreo Plaspy, dirigiendo sus reportes salientes al servidor de Plaspy y verificando la conectividad y el comportamiento de envío.

- Apunte el tracker al endpoint del servidor Plaspy para que los mensajes de ubicación y eventos se enruten a Plaspy.
- Configure el transporte y el puerto del dispositivo para que coincidan con los ajustes de Plaspy y guarde el cambio en la herramienta del fabricante.
- Valide que el equipo tenga conectividad celular y pueda alcanzar el servidor configurado.
- Confirme que las actualizaciones de ubicación, SOS y eventos de geocerca sean visibles en Plaspy después de que el dispositivo reporte.
- Reinicie o ciclée la alimentación del dispositivo si la herramienta del fabricante lo requiere para aplicar los cambios.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol when the device connects
- Plaspy uses the same port 8888 for all supported devices so you only need to set the device port once

## Requisitos previos antes de la configuración

- Un dispositivo Supermate D12-G cargado e instalado y listo para configurar
- Acceso a la herramienta de configuración oficial de Supermate o al conjunto de comandos SMS que provea el fabricante
- Una tarjeta SIM activa con datos (o el método de conectividad que soporte el dispositivo) y cobertura de red
- Un medio para probar y observar los reportes del dispositivo, como una cuenta Plaspy o un registro de conexión
- Acceso físico al equipo para reiniciarlo o realizar un restablecimiento de configuración si fuera necesario

## Cómo se conecta este tracker a Plaspy

El D12-G envía sus mensajes de rastreo y eventos al dominio y puerto del servidor Plaspy, donde Plaspy interpreta automáticamente el protocolo entrante y muestra la telemetría del dispositivo.

- Configure el equipo para reportar al dominio o IP del servidor Plaspy
- Use el puerto 8888 como puerto del dispositivo para que los mensajes lleguen al puerto esperado por Plaspy
- Seleccione UDP o TCP como transporte si el dispositivo exige una elección explícita
- Plaspy recibe los mensajes y detecta automáticamente el protocolo del tracker para decodificar la telemetría
- Una vez establecido el reporte, verá actualizaciones de ubicación y eventos en Plaspy para monitoreo operativo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Supermate, como el software del proveedor, la herramienta web o el conjunto de comandos SMS que suministre el fabricante.
2. En los ajustes de servidor del dispositivo ingrese el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Ajuste el puerto del dispositivo a 8888 para cumplir con los requisitos del servidor Plaspy.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según sus necesidades de instalación y las opciones del equipo.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los parámetros se escribieron en el dispositivo.
6. Reinicie o corte la alimentación del D12-G si la herramienta del fabricante indica hacerlo para que los cambios surtan efecto.
7. Verifique que el dispositivo reporte a Plaspy y que los mensajes de ubicación y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta varían según el firmware y la herramienta del fabricante. Los dispositivos Supermate suelen configurarse mediante el software oficial de configuración o el conjunto de comandos SMS, por lo que siga el método provisto por el fabricante para apuntar el equipo a d.plaspy.com o 54.85.159.138 en el puerto 8888. Dado que los métodos difieren por región y firmware, consulte la documentación de Supermate para el formato exacto de los comandos que usa su dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos requeridos o la ubicación de los menús en el software del fabricante; siempre verifique la versión de firmware antes de aplicar comandos.
- Si su herramienta de configuración permite tanto dominio como IP, usar d.plaspy.com aprovecha el enrutamiento por DNS, mientras que la IP ofrece una ruta directa; ambos son aceptables para Plaspy.
- Elija UDP si prefiere reportes con menor overhead y su red es muy confiable; elija TCP si necesita entrega orientada a conexión y el dispositivo lo soporta.
- Confirme que la SIM o el servicio celular permita conexiones de datos salientes necesarias para reportar al servidor Plaspy.
- Las herramientas del fabricante a veces requieren reiniciar el dispositivo para aplicar cambios de servidor; considere esto como parte normal del flujo de trabajo.

## Por qué usar Plaspy con esta configuración

Integrar el Supermate D12-G con Plaspy ofrece a las organizaciones una forma sencilla de centralizar en tiempo real la ubicación, las alertas de geocerca y los eventos SOS de activos distribuidos en una única plataforma de monitoreo. Usar los ajustes de servidor compartidos de Plaspy minimiza las diferencias por dispositivo y facilita escalar despliegues manteniendo un comportamiento de reporte consistente.

Para obtener más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y referencias de configuración, verifique los detalles en el sitio del fabricante Supermate http://www.gps-summit.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
