---
slug: /autofon/44/configuration
id: 44-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del AutoFon Маяк 4.4 con ajustes de servidor Plaspy y flujo práctico de instalación
keywords:
  - Configuración AutoFon Маяк 4.4
  - Instalación AutoFon Mayak 4.4
  - Compatibilidad Mayak 4.4 con Plaspy
  - Configuración del rastreador AutoFon
  - Configuración del servidor Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Configuración de rastreador de activos
  - Configuración de rastreador SMS GPRS
  - Configuración de plataforma GPS
---

# AutoFon - Маяк 4.4 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Маяк 4.4 con Plaspy. Resume los ajustes prácticos del servidor y el flujo típico de instalación necesarios para dirigir los SMS y los reportes periódicos por GPRS del dispositivo hacia la plataforma Plaspy, conservando las notas específicas del fabricante AutoFon cuando sean relevantes.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo en las conexiones entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga esta guía para los valores específicos de Plaspy y consulte el manual de AutoFon para los comandos precisos del equipo.

## Resumen de la configuración

Esta sección explica el propósito práctico de configurar un Mayak 4.4 para Plaspy y los resultados esperados tras la instalación.

- Preparar el dispositivo para enviar paquetes GPRS periódicos y actualizaciones por SMS al endpoint de Plaspy para que la ubicación y el estado aparezcan en la plataforma.
- Asegurar que el rastreador tenga conectividad celular válida, el APN correcto para la SIM y los ajustes de autorización para control remoto y alertas.
- Establecer los parámetros del servidor Plaspy en el dispositivo para que los reportes se enrutuen a Plaspy para mapeo, alertas e informes.
- Validar la conectividad y las señales de vida para que Plaspy pueda monitorear la batería y las señales periódicas del rastreador.
- Confirmar el reporte de alarmas y el control remoto para permitir que Plaspy desencadene acciones auxiliares como inmovilizador o flujos de trabajo de alarma.

## Ajustes del servidor Plaspy

Configure el rastreador para que reporte al endpoint de Plaspy utilizando estos valores públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Use el dominio o la IP en la configuración del dispositivo según la herramienta del fabricante o el formato del comando SMS que acepte el equipo.

## Requisitos típicos antes de la instalación

- Una unidad AutoFon Маяк 4.4 alimentada y funcional con antenas y batería o alimentación externa conectadas.
- Una tarjeta SIM provista para SMS y datos con el APN correcto configurado según el operador móvil.
- Acceso al método oficial de configuración de AutoFon, como el software del fabricante, herramienta web o interfaz de comandos por SMS.
- Cobertura de red en el lugar de instalación suficiente para reportes GSM y GPRS.
- Datos de autorización como el PIN del dispositivo y números telefónicos autorizados para el control remoto por SMS si se requieren.
- Una cuenta en Plaspy y el registro del identificador del dispositivo en la plataforma si su configuración operativa exige la asociación del equipo.

## Cómo se conecta este rastreador a Plaspy

El Mayak 4.4 envía información de ubicación y estado a Plaspy mediante mensajes SMS y paquetes GPRS periódicos. Cuando se configura con el endpoint y el puerto de Plaspy, el dispositivo queda visible en Plaspy para mapeo, alertas y flujos de comandos remotos.

- El dispositivo envía paquetes GPRS por intervalo o actualizaciones por SMS al dominio o IP de Plaspy.
- Los paquetes llegan a d.plaspy.com o a 54.85.159.138 en el puerto 8888, donde Plaspy escucha los datos entrantes de los dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador y analiza la ubicación y la telemetría sin requerir cambios de puerto por dispositivo.
- Si el equipo exige elegir explícitamente el transporte, puede seleccionarse UDP o TCP; Plaspy acepta ambos en el puerto compartido.
- Las señales periódicas de vida y los SMS de alarma son ingeridos por Plaspy y se utilizan para comprobaciones de salud del dispositivo y notificaciones de eventos.

## Flujo típico de configuración

Siga esta lista práctica para configurar un Mayak 4.4 para Plaspy:

1. Ingrese al método oficial de configuración de AutoFon, ya sea software del fabricante o la herramienta provista por el vendedor.
2. Configure el APN de la SIM y verifique que la SIM tenga datos y capacidad de SMS activos según el operador.
3. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de host del servidor.
4. Establezca el puerto del servidor en 8888 como puerto de reporte del dispositivo.
5. Seleccione UDP o TCP en el dispositivo si la interfaz de configuración requiere elegir el transporte.
6. Guarde o aplique los ajustes y reinicie el rastreador si el fabricante lo recomienda.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad en la plataforma, el envío inicial de ubicación o la llegada de la señal de vida.

## Ejemplos de comandos de configuración

Los comandos de configuración y la sintaxis exacta dependen del firmware de AutoFon y del canal de configuración que utilice (herramienta del fabricante, software para PC o SMS). Dado que los conjuntos de comandos del fabricante varían y no se proporciona contenido específico de modelConfiguration aquí, no incluimos ejemplos concretos. Los métodos típicos del fabricante incluyen:

- Utilizar el software de configuración de AutoFon para establecer host del servidor, IP del servidor, puerto, transporte y campos APN.
- Enviar comandos SMS de configuración al dispositivo en el formato documentado por el fabricante para establecer host o IP del servidor, puerto, APN y números autorizados.

Consulte el manual de AutoFon para la sintaxis precisa de los comandos al usar SMS o la herramienta del proveedor para aplicar los ajustes de Plaspy listados arriba.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los campos de configuración disponibles y la sintaxis de los comandos; siempre revise el manual del dispositivo de su unidad.
- Elija UDP cuando el rastreador favorezca menor overhead y mayor rendimiento por paquete; elija TCP cuando se prefiera entrega garantizada y el dispositivo lo soporte.
- Dado que el Mayak 4.4 está optimizado para reportes intermitentes, planifique los intervalos de reporte para equilibrar la visibilidad en Plaspy y la vida útil de la batería.
- Confirme los detalles del APN con el operador de la SIM e ingrese los valores exactos en la configuración de AutoFon si es necesario.
- Use el dominio d.plaspy.com cuando el software del fabricante admita DNS; use 54.85.159.138 cuando la herramienta de configuración requiera una IP en lugar de un nombre de host.

## Por qué usar Plaspy con esta configuración

Configurar AutoFon Маяк 4.4 para reportar a Plaspy ofrece una vía sencilla para mapear ubicaciones, recibir notificaciones de alarma y gestionar comandos remotos limitados sin sacrificar la larga autonomía de la batería ni la forma discreta del dispositivo. Plaspy acepta los SMS y los paquetes GPRS periódicos del equipo en un endpoint compartido y los procesa para visibilidad, alertas e informes operativos.

Para aprender más sobre Plaspy y las integraciones de dispositivos soportadas visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y las herramientas de configuración suministradas por el fabricante consulte el sitio oficial de AutoFon https://www.autofon.ru/ ya que las especificaciones y procedimientos de instalación pueden cambiar con el tiempo.
