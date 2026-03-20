---
slug: /cityeasy/200/configuration
id: 200-configuration
sidebar_label: Configuration
title: Cityeasy - 200 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Cityeasy 200 para reportar a Plaspy con ajustes de servidor compartido y guía práctica de instalación
keywords:
  - Configuración Cityeasy 200
  - Instalación Cityeasy 200
  - Cityeasy 200 Plaspy
  - Configuración servidor Cityeasy 200
  - Configuración rastreador GPS Cityeasy
  - Guía configuración tracker Cityeasy
  - Configuración seguimiento vehicular
  - Configuración GPS flota
  - Configuración dispositivo Plaspy
  - Integración rastreador GPS
---

# Cityeasy - 200 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Cityeasy 200 con la plataforma Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos prácticos que deberá seguir para apuntar un dispositivo Cityeasy 200 a Plaspy y así lograr visibilidad y reportes en tiempo real. Use esta guía junto con el manual del dispositivo y las herramientas del fabricante.

Plaspy emplea un endpoint y puerto comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos específicos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el software del proveedor. Siga el flujo de trabajo de alto nivel que aparece más abajo y confirme cualquier comando o menú específico del dispositivo con la documentación de Cityeasy.

## Resumen de la configuración

Esta configuración prepara el Cityeasy 200 para enviar datos de posición y eventos a Plaspy para que el dispositivo aparezca y reporte correctamente en la plataforma. El proceso consiste principalmente en indicar al rastreador a dónde enviar los datos, seleccionar el transporte si es necesario, guardar la configuración y validar la visibilidad en Plaspy.

- Apunte el rastreador al endpoint de Plaspy para que las posiciones y alertas lleguen a la plataforma.
- Configure la opción de transporte del dispositivo en UDP o TCP si el equipo requiere selección explícita.
- Establezca el puerto compartido de Plaspy para que el rastreador se conecte al mismo puerto usado por todos los dispositivos Plaspy.
- Guarde y aplique la configuración mediante la herramienta de Cityeasy o la interfaz SMS provista por el fabricante.
- Confirme que los datos llegan a Plaspy y que los eventos de movimiento, geocerca y alertas son visibles.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el Cityeasy 200. Estos valores se usan en todos los dispositivos soportados por Plaspy y son necesarios para el enrutamiento correcto.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración en el equipo.

## Requisitos típicos antes de la instalación

- Dispositivo alimentado e instalado según la guía de instalación del Cityeasy 200.
- Acceso al método de configuración de Cityeasy proporcionado por el proveedor, como herramienta web, software de escritorio o lista de comandos SMS.
- Una SIM activa o conectividad celular si el rastreador depende de la red móvil según lo descrito en la documentación de Cityeasy.
- Conocimiento de cualquier APN o marcadores de conectividad requeridos por su operador si aplica.
- Una cuenta o acceso a Plaspy para verificar que el dispositivo aparece y reporta después de la configuración.
- Un entorno de prueba o un vehículo controlado para validar la conectividad inicial y las alertas.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el Cityeasy 200 envía actualizaciones de posición y alertas de eventos al endpoint de Plaspy para que el dispositivo pueda ser monitoreado en la plataforma. Lo clave es dirigir el rastreador al servidor y puerto compartidos de Plaspy para que la plataforma lo reciba y aplique el manejo automático del protocolo.

- El rastreador informa ubicación y estado a d.plaspy.com o a 54.85.159.138.
- Los datos se envían al puerto 8888, que es el usado por todos los dispositivos Plaspy.
- Seleccione UDP o TCP en el dispositivo si la interfaz de configuración exige una elección de transporte.
- Plaspy inspecciona las conexiones entrantes y detecta automáticamente el protocolo del rastreador.
- Una vez validado el reporte, en Plaspy estarán visibles los eventos de geocerca, vibración, desplazamiento y el historial de rutas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del Cityeasy 200 proporcionado por el fabricante, como el software del proveedor, el portal de configuración o los comandos SMS documentados.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto en 8888 en la configuración del servidor.
4. Seleccione UDP o TCP en el dispositivo si la interfaz requiere elegir un transporte.
5. Aplique o guarde la configuración según la herramienta del fabricante o la respuesta al comando.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando la lista de dispositivos y los datos en vivo en la plataforma.

## Ejemplos de comandos de configuración

El Cityeasy 200 puede configurarse usando las herramientas del fabricante o comandos SMS suministrados por Cityeasy. Los comandos exactos y la sintaxis varían según el firmware y la herramienta del proveedor. Dado que los conjuntos de comandos del fabricante no se incluyen aquí, consulte el manual de Cityeasy para los formatos precisos y utilice los ajustes de servidor de la sección Plaspy al componer los comandos.

Si dispone de una lista de comandos de Cityeasy proporcionada por el fabricante, aplique el dominio o IP del servidor y el puerto según el flujo de trabajo. Preserve los marcadores que proporcione el proveedor como [apn] cuando estén presentes y reemplácelos por los valores específicos del operador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los campos disponibles en los menús y la sintaxis de los comandos SMS; siempre verifique con el manual del dispositivo.
- Si el dispositivo admite tanto UDP como TCP, pruebe ambos si experimenta problemas de entrega. Plaspy soporta cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Realice una prueba controlada antes de un despliegue masivo para confirmar que las alertas de geocerca, vibración y desplazamiento llegan y son interpretadas por Plaspy según lo esperado.
- Mantenga las herramientas del fabricante y el firmware del dispositivo actualizados cuando Cityeasy lo recomiende, y registre los ajustes usados en cada instalación.

## Por qué usar Plaspy con esta configuración

Usar el Cityeasy 200 con Plaspy ofrece una forma directa de centralizar los datos de posición y las alertas esenciales del vehículo en una sola plataforma. Apuntar el rastreador al endpoint compartido de Plaspy garantiza un manejo consistente de la telemetría para que los gestores de flotas y propietarios puedan monitorear ubicaciones en tiempo real, revisar rutas históricas y recibir alertas de movimiento o geocerca en un único lugar.

To learn more about Plaspy and how it manages incoming device data visit https://www.plaspy.com. Please verify the latest device specific setup details and any firmware instructions with the manufacturer at the official Cityeasy documentation or support channels as vendor information can change over time.
