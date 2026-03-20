---
slug: /navtelekom/signal_s_2551/configuration
id: signal_s_2551-configuration
sidebar_label: Configuration
title: Navtelekom - SIGNAL S-2551 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom SIGNAL S-2551 para Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - Navtelekom SIGNAL S-2551
  - configuración SIGNAL S-2551
  - configuración de rastreador Navtelekom
  - instalación rastreador Plaspy
  - configuración servidor Plaspy
  - configuración rastreador vehicular
  - configuración GPS gestión de flotas
  - rastreador EGTS FLEX 2.0
  - guía configuración rastreador GPS
  - ajustes TCP UDP rastreador
---

# Navtelekom - Configuración del SIGNAL S-2551

Esta página aborda el contexto público de configuración para usar el rastreador Navtelekom SIGNAL S-2551 con Plaspy. Resume los ajustes de servidor y el flujo de trabajo prácticos que usted seguirá para apuntar el dispositivo a Plaspy, y explica qué verificar en el equipo antes de registrarlo en su cuenta Plaspy. La orientación aquí se centra en detalles públicos relevantes para la integración con Plaspy, no en internals del dispositivo ni en procedimientos propietarios del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se comunica con la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas de configuración del proveedor. Use esta guía para preparar el S-2551 para conectividad con Plaspy y consulte la documentación de Navtelekom para comandos específicos del dispositivo y notas de firmware.

## Resumen de la configuración

El objetivo al configurar un SIGNAL S-2551 para Plaspy es garantizar que el dispositivo entregue de forma fiable la posición GNSS y la telemetría al endpoint de Plaspy y que aparezca en la plataforma para monitoreo, reproducción histórica y alertas basadas en reglas. Con su doble SIM y soporte para protocolos telemáticos estándar, el S-2551 puede apuntarse al servidor de Plaspy usando los ajustes compartidos que se muestran a continuación.

- Configure el dispositivo para enviar datos al dominio o IP del servidor Plaspy y use el puerto compartido de Plaspy.  
- Seleccione el transporte (UDP o TCP) si el firmware del equipo requiere elegir un tipo de transporte y ajuste el puerto en consecuencia.  
- Verifique la conectividad celular y que GPRS o la entrega por SMS funcionen si la instalación lo requiere.  
- Utilice el configurador USB de Navtelekom o la herramienta del fabricante para aplicar los ajustes y guarde una copia local de la configuración.  
- Confirme que el rastreador comience a reportar al endpoint de Plaspy y que la telemetría como entradas/salidas, CAN y eventos del acelerómetro lleguen a la plataforma.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy notes: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when data arrives

Estos ajustes públicos son los valores centrales que deberá ingresar en el SIGNAL S-2551 durante la configuración para que el dispositivo entregue telemetría y datos de posición a Plaspy.

## Requisitos habituales antes de la configuración

- Dispositivo alimentado e instalado o conectado a alimentación de banco con el rango de suministro recomendado disponible.  
- Conectividad celular válida en al menos una ranura de SIM y un plan de datos que soporte GPRS cuando sea necesario.  
- Acceso al método de configuración de Navtelekom que piensa usar, como el configurador USB o el software de configuración del fabricante.  
- Conocimiento de los datos de identificación del dispositivo y de las credenciales que la herramienta del fabricante pueda requerir para guardar o exportar perfiles de configuración.  
- MicroSD o registro local si pretende habilitar registro extendido durante las pruebas.  
- Un plan de pruebas para validar que el dispositivo reporte posiciones y telemetría tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando el SIGNAL S-2551 se configura para Plaspy, envía posiciones GNSS y telemetría del dispositivo a través de canales celulares a los servidores de Plaspy en el endpoint y puerto compartidos. Plaspy ingiere los mensajes entrantes y usa detección automática de protocolo para parsear EGTS, FLEX u otros formatos soportados, de modo que los registros aparezcan en su instancia de Plaspy sin selección de protocolo por dispositivo.

- El dispositivo se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El transporte se establece en el equipo como UDP o TCP según las opciones del firmware y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría y eventos entrantes.  
- La telemetría enviada puede incluir estados de I/O, entradas analógicas, datos CAN J1939, eventos del acelerómetro e informes de estado según la configuración.  
- Una vez que el dispositivo envía datos al endpoint de Plaspy, la plataforma mostrará el rastreador para monitoreo, reproducción histórica y gestión de alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Navtelekom, como el configurador USB o la utilidad de configuración del fabricante.  
2. En los ajustes de red o servidor, ingrese el dominio del servidor Plaspy d.plaspy.com o, de forma alternativa, la IP 54.85.159.138.  
3. Ajuste el puerto del servidor a 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos soportados.  
4. Elija el transporte UDP o TCP si el firmware del dispositivo requiere seleccionar transporte.  
5. Guarde o aplique la configuración y exporte una copia del perfil si su herramienta lo permite.  
6. Reinicie el dispositivo si el fabricante o la herramienta de configuración lo exige para activar los nuevos ajustes.  
7. Valide que el dispositivo reporte a Plaspy comprobando mensajes entrantes y actualizaciones de ubicación en la plataforma.

## Ejemplos de comandos de configuración

El SIGNAL S-2551 puede configurarse usando el Configurador USB de Navtelekom o las herramientas del fabricante y también puede admitir comandos por SMS según el firmware. Los comandos exactos y la sintaxis varían según la revisión de firmware y la utilidad de configuración específica de Navtelekom, por lo que debe consultar los manuales oficiales de Navtelekom para listas de comandos y ejemplos. Si usa el configurador USB o el software, siga los pasos del GUI para establecer el dominio del servidor d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 y seleccione el transporte preferido UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de menú disponibles y la ubicación exacta de los ajustes de servidor en la herramienta del fabricante; siempre verifique la versión de firmware antes de aplicar instrucciones.  
- Si prefiere UDP por menor sobrecarga o TCP por fiabilidad de sesión, elija el transporte que se ajuste a sus requisitos operativos; Plaspy acepta cualquiera de los dos en el puerto 8888.  
- El S-2551 soporta modos de entrega por SMS y GPRS en ciertas configuraciones; la configuración por SMS puede usarse para dispositivos remotos si el firmware lo permite.  
- Exportar y guardar una copia de seguridad del perfil de configuración antes de realizar cambios ayuda a recuperarse rápidamente ante una mala configuración.  
- Utilice la documentación del fabricante para confirmar cualquier sintaxis de comando específica del dispositivo o procedimientos de restablecimiento.

## Por qué usar Plaspy con esta configuración

Usar el SIGNAL S-2551 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real del vehículo, monitoreo de eventos y analítica operativa. La capacidad de doble SIM del equipo, el soporte de protocolos EGTS y FLEX, y sus amplias interfaces de I/O y CAN permiten entregar telemetría rica a Plaspy para supervisión de flotas, monitoreo de seguridad y procesos de diagnóstico basados en eventos.

Learn more about Plaspy and how the platform handles device telemetry at https://www.plaspy.com. For device specific commands, firmware details, and the latest manufacturer guidance verify current information on the Navtelekom website https://www.navtelecom.ru/.
