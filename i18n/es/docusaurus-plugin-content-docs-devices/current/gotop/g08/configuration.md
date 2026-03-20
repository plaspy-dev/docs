---
slug: /gotop/g08/configuration
id: g08-configuration
sidebar_label: Configuration
title: GOTOP - G08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G08 OBD con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración GOTOP G08
  - Instalación GOTOP G08
  - Configuración del servidor GOTOP G08
  - Configuración GOTOP G08 Plaspy
  - Rastreador GPS GOTOP G08
  - Rastreador OBD GOTOP G08
  - Configuración de dispositivo Plaspy
  - Configuración de rastreador Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de seguimiento vehicular
---

# GOTOP - Configuración del G08

Esta página describe el contexto público de configuración para usar el rastreador OBD-II GOTOP G08 con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos necesarios para que el G08 reporte ubicación, estado y eventos de alarma a una flota en Plaspy. Use esta guía como referencia para implementaciones compatibles con Plaspy y consulte siempre la documentación del fabricante para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que simplifica la integración por parte de la plataforma. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que siempre confirme las instrucciones específicas de GOTOP al hacer la puesta en marcha final.

## Resumen de configuración

El objetivo es apuntar el G08 a Plaspy, asegurarse de que el rastreador tenga conectividad celular y alimentación, y validar que el dispositivo sea visible y esté reportando correctamente en Plaspy. Este proceso normalmente requiere acceso al método o herramienta de configuración GOTOP, una conexión celular activa y una flota en Plaspy preparada para aceptar el dispositivo.

- Configure el dispositivo para que reporte a Plaspy usando el endpoint de servidor compartido y el puerto de la plataforma.
- Asegúrese de que el G08 tenga una micro SIM activa y conectividad celular antes de finalizar la configuración.
- Verifique que las alarmas y la telemetría (exceso de velocidad, movimiento, corte de energía) aparezcan en Plaspy después de la configuración.
- Guarde y aplique la configuración en el dispositivo usando la herramienta oficial GOTOP o el método del proveedor, y confirme que el equipo reporte a Plaspy.
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para facilitar la incorporación.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la instalación

- Acceso al puerto OBD del vehículo para insertar el G08 y suministrarle energía (el G08 funciona con DC 9V–35V desde OBD).
- Una micro SIM con un plan de datos activo compatible con la red celular del dispositivo (el G08 usa hardware 2G de banda cuádruple).
- El rastreador encendido y accesible para el instalador, de modo que se puedan aplicar los métodos de configuración del fabricante.
- Acceso al software de configuración oficial de GOTOP, la guía de comandos SMS o la herramienta de aprovisionamiento del proveedor según lo entregue el fabricante o revendedor.
- Una cuenta activa en Plaspy o un espacio en la flota donde registrar y validar el dispositivo.
- Registro básico del identificador del dispositivo proporcionado por el rastreador o el proveedor para el registro en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G08 envía fijaciones de ubicación, mensajes de estado y eventos de alarma por celular a Plaspy. El rastreador se apunta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir telemetría y mostrar seguimiento en tiempo real y alertas.

- El G08 envía datos de posición GPS y BeiDou y, como respaldo, información LBS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; elija el que soporte el rastreador y Plaspy detectará el protocolo automáticamente.
- Eventos de alarma como exceso de velocidad, movimiento, vibración y corte de energía se transmiten a Plaspy como eventos para alertas y flujos de trabajo.
- Plaspy recibe telemetría para seguimiento en tiempo real, reproducción de historial, geocercas y reglas de alerta configuradas.
- Tras la configuración, valide que el dispositivo sea visible y esté reportando en los paneles de Plaspy.

## Flujo típico de configuración

1. Inserte el G08 en el puerto OBD del vehículo y confirme que el dispositivo enciende y se conecta a la red celular.
2. Acceda al método o software de configuración oficial de GOTOP proporcionado por el proveedor (puede ser una herramienta para Windows, una app móvil o un conjunto de comandos SMS).
3. En la configuración del dispositivo, establezca el servidor en d.plaspy.com o ingrese la IP 54.85.159.138 si la herramienta requiere una dirección IP.
4. Configure el puerto de reporte en 8888 (Plaspy utiliza este mismo puerto para todos los dispositivos).
5. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte; Plaspy soporta ambos y detecta el protocolo del rastreador del lado de la plataforma.
6. Aplique o guarde la configuración en la herramienta del dispositivo y, si es necesario, reinicie o desconecte y vuelva a conectar el rastreador para completar el aprovisionamiento.
7. Valide en Plaspy que el dispositivo esté reportando actualizaciones de posición y eventos de alarma según lo esperado.

## Ejemplos de comandos de configuración

No se incluyen comandos modelConfiguration públicos para el GOTOP G08 en esta guía. Los comandos exactos y la interfaz para aplicar los valores del servidor Plaspy dependen de la herramienta GOTOP, la versión de firmware o el flujo de aprovisionamiento del proveedor. Algunos instaladores usan software del fabricante o comandos SMS para establecer dominio y puerto del servidor; al seguir esas instrucciones, utilice d.plaspy.com o 54.85.159.138 y puerto 8888, y seleccione UDP o TCP si se le solicita.

Si obtiene una referencia de comandos GOTOP del fabricante o revendedor, aplique los valores de servidor exactamente como los muestre el proveedor y siga cualquier orden o pasos de reinicio que el fabricante indique.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración o los comandos disponibles; verifique siempre la documentación GOTOP para la versión de firmware de su equipo.
- El G08 es un dispositivo 2G; confirme la cobertura celular y la compatibilidad de la red del operador en el área de despliegue antes de realizar implementaciones a gran escala.
- Elija TCP cuando necesite fiabilidad de conexión a costa de mayor sobrecarga de sesión; elija UDP cuando prefiera menor sobrecarga y latencia reducida y la red sea estable.
- Plaspy utiliza un único puerto para todos los dispositivos (puerto 8888) y detecta automáticamente los protocolos de los rastreadores para simplificar la configuración del backend.
- Mantenga una copia de los pasos de aprovisionamiento del dispositivo y de cualquier plantilla de comandos SMS proporcionada por GOTOP para mantenimiento futuro y despliegues en lote.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G08 con Plaspy ofrece a los equipos operativos una vía rápida y de bajo fricción para obtener visibilidad de la flota. El factor de forma OBD plug-and-play reduce tiempo y costos de instalación, mientras que Plaspy ingiere posición y eventos de alarma para monitoreo en tiempo real, análisis histórico y alertas automáticas que mejoran la supervisión operativa y la seguridad.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para pasos finales de configuración por dispositivo, detalles de firmware y documentación del fabricante, verifique la información más reciente en GOTOP https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
