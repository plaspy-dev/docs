---
slug: /skypatrol/sp1603/configuration
id: sp1603-configuration
sidebar_label: Configuration
title: SkyPatrol - SP1603 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol SP1603 para integrarlo con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - Configuración SkyPatrol SP1603
  - Configuración SP1603
  - Configuración Plaspy SP1603
  - Configuración servidor SP1603
  - Configuración rastreador GPS SP1603
  - Configuración rastreador de tobillo SkyPatrol
  - Configuración rastreador supervisión de ofensores
  - Configuración GPS detención domiciliaria
  - Configuración dispositivo Plaspy
  - Integración rastreador GPS Plaspy
---

# SkyPatrol - Configuración SP1603

Esta página describe el contexto público de configuración para usar el rastreador SkyPatrol SP1603 con Plaspy. Explica los ajustes de servidor compartido que Plaspy requiere y los pasos prácticos que normalmente siguen un instalador o administrador para apuntar el dispositivo a Plaspy y habilitar el envío de telemetría y eventos. La guía se centra en los hechos públicos necesarios para conectar el SP1603 a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como referencia práctica para los ajustes en Plaspy y confirme los controles específicos del dispositivo en la documentación y utilitarios de SkyPatrol.

## Resumen de la configuración

Este proceso prepara el SP1603 para transmitir ubicación y estado a Plaspy, de modo que supervisores y responsables de casos puedan ver telemetría en tiempo real y recibir alertas. El endpoint público de Plaspy y el puerto son los únicos valores de plataforma que debe introducir en el dispositivo o en la herramienta del fabricante.

- Apunte el dispositivo al servidor de Plaspy para habilitar la carga de telemetría y las notificaciones de eventos.  
- Configure el transporte del dispositivo para usar UDP o TCP según las opciones de la herramienta del equipo.  
- Asegúrese de que el dispositivo sea accesible en la red móvil y que la configuración de la SIM sea correcta en instalaciones con doble SIM.  
- Valide la conectividad del dispositivo y el reporte en vivo en Plaspy después de aplicar los ajustes.  
- Confirme que los reportes de manipulación, batería y presencia aparezcan como se espera en la plataforma Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte para UDP o TCP en el puerto 8888 dependiendo de la capacidad del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Batería del dispositivo cargada o instalación con alimentación y LED de estado visibles si los tiene.  
- Servicio celular activo y tarjetas SIM provistas correctamente para operación con doble SIM si se utiliza.  
- Acceso al método de configuración oficial de SkyPatrol, como software del proveedor, portal web o herramienta de servicio.  
- Acceso administrativo a la utilidad de configuración del dispositivo o a la herramienta de instalador suministrada por SkyPatrol.  
- Una cuenta en Plaspy o contacto con su administrador de Plaspy para que el dispositivo se asocie con la cuenta y permisos correctos.  
- Documentación básica de la versión de firmware del dispositivo que está configurando para confirmar opciones disponibles y elección de transporte.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el SP1603 reporta sus mensajes de telemetría y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir, normalizar y presentar los datos. Plaspy aplica luego la lógica de detección y las reglas para alertas y registro histórico.

- El rastreador establece conexiones salientes a d.plaspy.com o 54.85.159.138 usando el puerto 8888.  
- Los mensajes se envían sobre el transporte seleccionado, UDP o TCP, según la configuración del dispositivo.  
- Plaspy determina automáticamente el protocolo del dispositivo cuando se realiza la primera conexión.  
- Las actualizaciones de ubicación, alertas de manipulación, estado de batería y eventos relacionados con presencia se envían a Plaspy para visualización y registro.  
- Se reportan la conectividad y el estado de doble SIM para que los administradores puedan monitorear el tiempo al aire (air time) y la conmutación entre operadores.

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de SkyPatrol o al software proporcionado por el fabricante para el SP1603.  
2. En el dispositivo o en la herramienta del proveedor, ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 si la herramienta lo requiere.  
3. Configure el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en la opción de transporte si el dispositivo requiere una selección explícita.  
5. Guarde o aplique la configuración en la herramienta del fabricante para que los ajustes se escriban en el dispositivo.  
6. Reinicie o aplique un ciclo de alimentación al dispositivo si las instrucciones del proveedor indican que es necesario para que los cambios surtan efecto.  
7. Valide que el dispositivo aparezca y reporte en Plaspy y confirme que la telemetría, las alertas de manipulación y los eventos de batería sean visibles para los supervisores.

## Ejemplos de comandos de configuración

No se incluyen cadenas de comandos públicas específicas del proveedor en esta página. Los comandos exactos y el método para enviarlos dependen de la herramienta de configuración de SkyPatrol, la compilación de firmware y el flujo de instalación. Al utilizar una utilidad del fabricante o una configuración basada en SMS proporcionada por SkyPatrol, normalmente deberá indicar el dominio del servidor d.plaspy.com o la IP alternativa 54.85.159.138 y establecer el puerto en 8888, luego elegir UDP o TCP si se solicita. Siga siempre las indicaciones de la herramienta del proveedor y mantenga los marcadores de posición o valores APN que el firmware del dispositivo requiera.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar las opciones de configuración disponibles, por lo que siempre verifique la documentación de SkyPatrol para la versión de firmware de su equipo.  
- Los instaladores deben decidir entre UDP y TCP según las recomendaciones de la herramienta del dispositivo y las características de la red; Plaspy soporta ambos en el puerto 8888.  
- Los dispositivos con doble SIM como el SP1603 requieren una provisión correcta de las SIM y pueden incluir comportamiento de conmutación entre operadores controlado por el firmware del dispositivo.  
- Aplique y guarde los ajustes usando la herramienta oficial de SkyPatrol para asegurar que las configuraciones persistan tras ciclos de energía.  
- Verifique la configuración de manipulación y baliza como parte de las pruebas funcionales después de que el dispositivo reporte a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SP1603 con Plaspy ofrece a los equipos de supervisión un punto central para recibir telemetría de ubicación, manipulación y presencia desde dispositivos de tobillo diseñados para la supervisión de ofensores. Apuntar el rastreador al endpoint compartido de Plaspy simplifica la integración porque la plataforma emplea un único puerto y detección automática de protocolo, lo que reduce la carga administrativa durante la incorporación de dispositivos.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo, notas de firmware y orientación del fabricante para el SP1603, verifique la información en el sitio de SkyPatrol https://www.skypatrol.com/ ya que los métodos de dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
