---
slug: /gotop/g02/configuration
id: g02-configuration
sidebar_label: Configuration
title: GOTOP - G02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP G02 con Plaspy, pasos de servidor y notas de integración
keywords:
  - Configuración GOTOP G02
  - Instalación GOTOP G02
  - Configuración servidor GOTOP G02
  - GOTOP G02 Plaspy
  - Configuración rastreador GPS GOTOP G02
  - Configuración rastreador GOTOP
  - GOTOP G02 4G
  - Configuración GOTOP G02 IP67
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos GOTOP G02
---

# GOTOP - Configuración del G02

Esta página explica el contexto público de configuración para usar el rastreador GOTOP G02 (G02-4G) con Plaspy. Describe la configuración de servidor compartida a la que debe apuntar el equipo y ofrece orientación práctica, independiente del proveedor, para preparar la unidad y que se comunique con Plaspy. El G02-4G es un rastreador compacto con clasificación IP67 para motocicletas, bicicletas eléctricas y automóviles; soporta reportes por SMS o 4G, detección de ACC y múltiples tipos de alarma. Este documento se concentra en los pasos públicos necesarios para conectarlo a Plaspy.

Plaspy utiliza un endpoint y puerto de servidor compartido para dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; utilice esta guía para entender los requisitos desde el lado de Plaspy y combínela con la herramienta oficial de GOTOP o el conjunto de comandos SMS del fabricante para acciones específicas del equipo.

## Resumen de la configuración

Configurar el GOTOP G02 para Plaspy significa preparar el rastreador para que envíe de forma fiable datos de posición y eventos al endpoint de Plaspy. Los pasos siguientes son metas prácticas para el proceso y ayudan a garantizar que la unidad aparezca y reporte correctamente en la plataforma Plaspy.

- Apunte el dispositivo al endpoint de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138 para que los reportes salientes lleguen a Plaspy.
- Configure el puerto 8888, que Plaspy emplea para todos los rastreadores compatibles.
- Seleccione el transporte UDP o TCP en el rastreador si la interfaz del dispositivo lo requiere.
- Aplique y guarde la configuración en la herramienta GOTOP o vía comandos SMS del rastreador y reinicie el equipo si es necesario.
- Verifique el IMEI o el ID del dispositivo y confirme que la unidad está reportando a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP (el dispositivo puede configurarse usando cualquiera de los dos en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

## Requisitos típicos antes de comenzar

- Un dispositivo GOTOP G02 con alimentación, instalado o conectado con alimentación estable del vehículo o con batería de respaldo cargada.
- Una tarjeta SIM activa con datos o capacidad SMS según el método de configuración que elija.
- Acceso al método oficial de configuración GOTOP, como la herramienta web del proveedor, el software para PC o el conjunto de comandos SMS.
- El IMEI del dispositivo o el ID único del rastreador disponible para registrar o identificar la unidad en Plaspy.
- Un lugar para probar la conectividad donde haya cobertura celular para reportes 4G.
- Conocimiento de la versión de firmware del dispositivo y de la versión de la herramienta del proveedor, ya que la sintaxis de los comandos y las opciones del menú pueden variar.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el GOTOP G02 envía sus mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy para que la plataforma pueda recibir y mostrar los datos de seguimiento. Plaspy escucha las conexiones entrantes en el puerto 8888 y detecta automáticamente el protocolo, por lo que solo necesita asegurarse de que la dirección del servidor y el transporte coincidan con lo que el equipo soporta.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Las actualizaciones de ubicación y los eventos se envían sobre el transporte seleccionado (UDP o TCP).
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes.
- Cuando el dispositivo reporte correctamente, la unidad será visible en Plaspy y comenzará a enviar posiciones y alarmas.
- Verificaciones periódicas confirman que el rastreador está en línea y que las alarmas como geocerca o corte de energía llegan a la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración GOTOP o al software proporcionado por el fabricante, o prepárese para usar comandos SMS si aplica.
2. En las configuraciones del equipo, ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como alternativa.
3. Establezca el puerto del dispositivo en 8888 que Plaspy usa para todos los equipos compatibles.
4. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según su preferencia de red o la capacidad del equipo.
5. Aplique o guarde la configuración en la herramienta GOTOP o envíe los comandos SMS correspondientes para almacenar los ajustes en el dispositivo.
6. Reinicie el rastreador si las instrucciones del fabricante indican que se necesita un reinicio para aplicar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad de la unidad y las actualizaciones de posición recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El GOTOP G02 puede configurarse usando la utilidad del fabricante o mediante comandos SMS. Los comandos exactos y la sintaxis varían según el firmware y la herramienta del proveedor, por lo que no hay comandos universales aquí. En la práctica usted:

- Usará la herramienta GOTOP para PC o móvil para establecer la dirección del servidor (d.plaspy.com o 54.85.159.138), el puerto 8888 y seleccionar UDP o TCP si se requiere.
- O bien usará el formato de comandos SMS de GOTOP que proporcione el fabricante para enviar la dirección del servidor y el puerto al dispositivo, luego guardar y reiniciar el rastreador.

Como los conjuntos de comandos del fabricante pueden cambiar entre versiones de firmware, consulte la documentación de GOTOP o la utilidad de configuración para obtener las cadenas de comando exactas y los pasos para apuntar al servidor Plaspy.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores compatibles y detecta automáticamente el protocolo entrante, por lo que no necesita un puerto Plaspy específico por dispositivo.
- El G02 soporta reportes por SMS o 4G; si configura vía SMS usará el conjunto de comandos SMS del dispositivo, mientras que las herramientas web o de PC suelen ofrecer una interfaz gráfica para seleccionar servidor y transporte.
- Asegúrese de que el APN de la SIM y los ajustes de datos móviles estén correctos en el dispositivo si usa reportes 4G; los valores del APN los proporciona el operador móvil y deben ingresarse en la herramienta del fabricante si es necesario.
- Las revisiones de firmware y hardware pueden cambiar nombres de comandos y ubicaciones de menú; registre la versión de firmware del equipo antes de realizar cambios.
- Elegir UDP o TCP puede afectar la confiabilidad de los mensajes y el comportamiento en la red; seleccione el transporte que mejor se ajuste a su despliegue y a las características de la red del operador.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G02 con Plaspy proporciona a los operadores una forma sencilla de centralizar la ubicación de vehículos, alarmas y estado operativo en una sola plataforma de seguimiento. El diseño compacto IP67 del G02, la detección de ACC y los múltiples tipos de alarma lo hacen adecuado para diversos vehículos, y apuntarlo a Plaspy garantiza una ingestión y visibilidad consistentes de esos eventos.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores como el GOTOP G02, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y la guía del fabricante, siempre verifique los detalles actuales en el sitio oficial de GOTOP https://www.gotop.cc/.
