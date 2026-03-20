---
slug: /gotop/g909/configuration
id: g909-configuration
sidebar_label: Configuration
title: GOTOP - G909 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP G909 con Plaspy mediante ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración GOTOP G909
  - instalación GOTOP G909
  - configuración servidor GOTOP G909
  - configuración G909 Plaspy
  - configuración rastreador GOTOP
  - instalación rastreador G909
  - GOTOP G909 Plaspy
  - guía configuración G909
  - rastreo vehicular G909
  - configuración plataforma rastreo
---

# GOTOP - Configuración del G909

Esta página describe el contexto público de configuración para usar el rastreador GPS compacto GOTOP G909 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, los pasos prácticos más comunes para apuntar un G909 a la plataforma y qué verificar para que el dispositivo sea visible y reporte correctamente dentro de Plaspy. El contenido se enfoca en detalles de configuración públicos e independientes del fabricante y en la compatibilidad con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas de configuración del proveedor. Use esta guía para comprender la integración desde la perspectiva de Plaspy y consulte la documentación o el software de GOTOP para controles específicos del dispositivo.

## Resumen de la configuración

Esta sección describe el propósito práctico de configurar un GOTOP G909 para Plaspy. El proceso prepara el dispositivo para comunicarse de forma fiable con la plataforma Plaspy, valida la conectividad y habilita el envío de ubicación y alarmas para que el rastreador aparezca y funcione correctamente en la interfaz de Plaspy.

- Configure el G909 para enviar datos al endpoint del servidor Plaspy y así entregar ubicaciones y alarmas.
- Asegúrese de que los ajustes de transporte usen el protocolo y puerto soportados para que Plaspy acepte los datos.
- Valide que el dato móvil y el registro en la red del dispositivo estén activos para que pueda subir datos almacenados y en tiempo real.
- Confirme que las notificaciones de alarma y eventos estén habilitadas para que excesos de velocidad, vibración y geocercas lleguen a Plaspy.
- Verifique que el rastreador sea visible en Plaspy tras la configuración y pruebe escenarios básicos de reporte.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el GOTOP G909 o al introducir los datos del endpoint en la herramienta de configuración de GOTOP:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y autodetecta el protocolo correcto del rastreador. El G909 puede configurarse para usar UDP o TCP en el puerto 8888 cuando apunte al servidor de Plaspy.

## Requisitos típicos antes de la instalación

- Un dispositivo GOTOP G909 alimentado y en condiciones de funcionamiento.
- Una tarjeta SIM activa con datos móviles habilitados y el APN configurado si es necesario para que el dispositivo acceda a internet público.
- Acceso al método o software oficial de configuración de GOTOP para el modelo G909.
- Los datos del servidor Plaspy indicados arriba disponibles para el instalador o la herramienta de configuración.
- Conocimiento de opciones específicas del dispositivo, como la selección de transporte entre UDP y TCP y los ajustes de reporte de alarmas.
- Un procedimiento para validar y probar el reporte una vez aplicada la configuración, por ejemplo un viaje corto de prueba o activar una alarma de prueba.

## Cómo se conecta este rastreador a Plaspy

El G909 envía datos de ubicación y eventos a Plaspy mediante conexiones estándar de datos TCP o UDP hacia el endpoint y puerto compartido de Plaspy. Una vez configurado, el dispositivo sube actualizaciones periódicas de posición y notificaciones de alarma para que el activo sea visible y monitoreado desde Plaspy.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Elija transporte UDP o TCP según lo soporte el dispositivo; el rastreador puede admitir ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones entrantes en el puerto compartido.
- Las actualizaciones de ubicación, alertas de geocerca, excesos de velocidad y alarmas por vibración se reenvían a Plaspy para visualización y alerta.
- Si la conectividad no está disponible, el G909 puede almacenar datos y subirlos cuando se restablezca la red, según el firmware del dispositivo.

## Flujo común de configuración

1. Acceda al método oficial de configuración de GOTOP o al software para el G909. Utilice la app del fabricante, la herramienta de PC o comandos SMS según lo proporcione GOTOP.
2. En la sección de ajustes del servidor, introduzca la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione el protocolo de transporte UDP o TCP si el equipo requiere elegir uno.
5. Configure el APN de datos móviles o cualquier ajuste relacionado con la SIM necesario para el acceso a internet del dispositivo.
6. Aplique o guarde la configuración en el dispositivo y realice cualquier reinicio recomendado por el fabricante.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de posición entrantes y eventos de prueba en Plaspy.

## Ejemplos de comandos de configuración

El GOTOP G909 admite múltiples métodos de configuración y los comandos o campos exactos del software varían según el firmware y la herramienta del fabricante. Debido a estas diferencias, no se incluyen comandos universales aquí. Consulte la utilidad de configuración de GOTOP o el manual oficial del G909 para comandos y ejemplos específicos del dispositivo.

Si utiliza un SMS proporcionado por GOTOP o una herramienta de PC para la configuración, introduzca el dominio o la IP del servidor y el puerto tal como se muestran en la sección Ajustes de servidor de Plaspy y elija UDP o TCP donde sea necesario. Para APN o ajustes de SIM, proporcione los valores que requiera su operador móvil.

## Notas de configuración

- Diferentes versiones de firmware y revisiones de hardware pueden cambiar los campos de configuración disponibles o la sintaxis de comandos. Verifique con la documentación de GOTOP para su versión de dispositivo.
- Elegir UDP frente a TCP puede afectar el comportamiento de entrega; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El servidor Plaspy es accesible por dominio d.plaspy.com o IP 54.85.159.138 en el puerto 8888; use el método que acepte su herramienta de configuración.
- Algunos instaladores prefieren probar la configuración con una sesión breve en vivo o una alarma controlada para confirmar el reporte a Plaspy.
- Mantenga siempre una copia de los ajustes originales del dispositivo antes de hacer cambios para poder restaurar la configuración de fábrica si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP G909 para reportar a Plaspy permite centralizar de forma práctica los datos de ubicación, alarmas y operación de rastreadores de activos pequeños en una única plataforma de monitoreo. Para organizaciones que requieren visibilidad sobre el estado de vehículos, movimientos y eventos de alarma, usar Plaspy con un G909 habilitado facilita la supervisión consolidada, las notificaciones de eventos y una administración operacional más eficiente.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los pasos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio de GOTOP https://www.gotop.cc/ ya que los métodos de instalación y el comportamiento del dispositivo pueden cambiar con el tiempo.
