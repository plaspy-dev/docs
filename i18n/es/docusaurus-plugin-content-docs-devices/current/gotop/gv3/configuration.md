---
slug: /gotop/gv3/configuration
id: gv3-configuration
sidebar_label: Configuration
title: GOTOP - GV3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GOTOP GV3 a Plaspy, con ajustes de servidor y flujo de configuración
keywords:
  - Configuración GOTOP GV3
  - Instalación GOTOP GV3
  - Configuración servidor GOTOP GV3
  - Integración Plaspy
  - Rastreador GPS GV3
  - Rastreo vehicular GV3
  - Gestión de flotas GV3
  - Configuración rastreador GPS
  - Configuración rastreador GOTOP
  - Compatibilidad GV3 Plaspy
---

# GOTOP - GV3 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador 4G GOTOP GV3 con Plaspy. Explica los ajustes de servidor y el flujo de configuración práctico que deberá seguir para conectar dispositivos GV3 a la plataforma Plaspy y obtener seguimiento en tiempo real, alertas y visibilidad de la flota. El contenido aquí se centra en el endpoint compartido de Plaspy y los pasos comunes de integración, no en desmontaje del equipo ni en herramientas propietarias del fabricante.

Plaspy utiliza ajustes de servidor compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo una vez que este envía datos. Los pasos exactos del lado del fabricante para el GV3 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor (por ejemplo comandos SMS, herramientas web o software de configuración). Use esta guía para preparar el dispositivo para Plaspy y consulte la documentación de GOTOP para comandos o notas de firmware específicas del dispositivo.

## Resumen de la configuración

Este proceso prepara el GV3 para enviar ubicación y telemetría a Plaspy, de modo que el rastreador sea visible en la plataforma para mapas, alertas e informes. El objetivo es apuntar el dispositivo al servidor de Plaspy, usar el transporte y puerto correctos y transmitir la telemetría inicial para que Plaspy detecte automáticamente el protocolo del dispositivo.

- Apuntar el GV3 al endpoint de Plaspy para que los datos lleguen a los paneles de Plaspy.
- Configurar el transporte en UDP o TCP si la interfaz del equipo exige elegir.
- Establecer el puerto 8888, el único puerto que Plaspy usa para todos los dispositivos soportados.
- Verificar la conectividad móvil (4G con fallback a 2G) y disponer de una SIM activa con datos o soporte SMS.
- Validar que el dispositivo aparece en Plaspy después de aplicar los ajustes y reiniciar el rastreador si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos son los ajustes públicos que deberá ingresar en el GV3 (o en la herramienta de configuración del fabricante) para que Plaspy reciba la telemetría del dispositivo. Tenga en cuenta que Plaspy usa el mismo puerto para todos los equipos compatibles y detectará el protocolo correcto automáticamente cuando el dispositivo transmita.

## Requisitos previos antes de la configuración

- Una unidad GOTOP GV3 instalada y alimentada con una fuente confiable o con batería interna cargada para las comprobaciones iniciales.
- Una tarjeta SIM funcional con datos activos (se recomienda 4G) o capacidad SMS según el método de configuración elegido.
- Acceso al método oficial de configuración GOTOP para su versión de dispositivo, como la interfaz por comandos SMS, el portal web del proveedor o el software del fabricante.
- Información básica del dispositivo a mano: IMEI, ID del equipo y cualquier credencial de instalador o administrador que requiera el fabricante.
- Señal celular estable en el vehículo o banco de pruebas para confirmar el reporte inicial al servidor de Plaspy.
- Acceso a una cuenta Plaspy o instrucciones de su administrador Plaspy para confirmar el registro y la visibilidad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando esté configurado, el GV3 envía mensajes de posición GPS y estado al endpoint y al puerto del servidor Plaspy para que Plaspy pueda ingerir la telemetría en tiempo real. Plaspy recibe esos mensajes y los asocia al registro del dispositivo, habilitando seguimiento en vivo, reenvío de alarmas e informes históricos.

- El GV3 reporta al endpoint compartido de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
- Los datos se transmiten al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el método de configuración y el firmware del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes al parser correcto.
- Una vez que los datos llegan a Plaspy, los puntos de ubicación, estado ACC/ignición, eventos SOS y alarmas estarán disponibles en la interfaz de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP para su unidad GV3, como el conjunto de comandos SMS, el portal web del proveedor o la herramienta de configuración de GOTOP.
2. Ingrese el endpoint de Plaspy especificando d.plaspy.com o 54.85.159.138 en el campo de dirección del servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto entre dispositivos.
4. Seleccione el transporte UDP o TCP si el equipo requiere una selección explícita.
5. Aplique o guarde la configuración usando la herramienta del fabricante o envíe los comandos SMS necesarios para actualizar los ajustes.
6. Reinicie el GV3 si el fabricante lo recomienda o si los ajustes no surten efecto de inmediato.
7. Valide que el dispositivo reporta a Plaspy comprobando la telemetría entrante en su cuenta Plaspy o confirmando que el dispositivo aparezca en línea en los paneles de Plaspy.

## Ejemplos de comandos de configuración

El GV3 admite métodos de configuración del fabricante como comandos SMS o software del proveedor. Los comandos exactos y la sintaxis pueden variar según el firmware y la herramienta del proveedor, por lo que debe consultar la documentación de GOTOP para el conjunto de comandos preciso. Si utiliza configuración por SMS, siga la referencia de comandos SMS de GOTOP para establecer dirección de servidor, puerto, transporte y ajustes de APN. Plaspy acepta datos enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o las opciones disponibles; siempre consulte el manual GOTOP para la versión de firmware de su GV3.
- Elija UDP o TCP según las recomendaciones del fabricante y la fiabilidad de la red; Plaspy detectará automáticamente el protocolo del dispositivo una vez que lleguen los datos.
- Debido a que Plaspy utiliza el mismo puerto para todos los dispositivos, confirme que el puerto 8888 esté configurado correctamente en el rastreador para evitar problemas de conectividad.
- Si configura el dispositivo por SMS, permita un breve tiempo de propagación y reinicie el rastreador si los cambios no parecen aplicarse.
- Tenga a la mano los ajustes de APN y SIM si el dispositivo los requiere; los marcadores de posición como [apn], [apnu] o [apnp] a veces se usan en plantillas del fabricante para indicar los valores del operador.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP GV3 con Plaspy ofrece una vía práctica para la monitorización centralizada de flotas, alertas en tiempo real y respuesta ante incidentes. La conectividad 4G con fallback a 2G del GV3, las entradas vehiculares como ACC y SOS, y las alarmas integradas, proporcionan la telemetría que Plaspy necesita para ofrecer mapas, cumplimiento de geocercas y flujos de trabajo basados en eventos para equipos de operaciones y seguridad.

Para obtener más información sobre Plaspy y cómo funciona con los rastreadores compatibles visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, notas de firmware y orientación del fabricante para el GV3, consulte el sitio de GOTOP en https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
