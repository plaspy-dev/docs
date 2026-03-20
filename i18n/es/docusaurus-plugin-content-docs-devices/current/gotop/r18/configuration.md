---
slug: /gotop/r18/configuration
id: r18-configuration
sidebar_label: Configuration
title: GOTOP - R18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP R18 con Plaspy, incluyendo ajustes de servidor y flujo de trabajo
keywords:
  - Configuración GOTOP R18
  - Instalación GOTOP R18
  - Configuración R18 Plaspy
  - Rastreador GOTOP Plaspy
  - Instalación rastreador GPS R18
  - Configuración rastreador vehicular
  - Configuración rastreo de flotas
  - Ajustes de servidor rastreador GPS
  - Integración rastreo R18
  - Configuración de dispositivo Plaspy
---

# GOTOP - R18 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP R18 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, el flujo de trabajo práctico de configuración y qué confirmar en el dispositivo antes de intentar la integración. Use esta guía como referencia orientada al técnico para preparar unidades R18 y conectarlas a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto aplican a la mayoría de las integraciones. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, así que confirme siempre los detalles con la documentación del dispositivo y las herramientas oficiales de GOTOP.

## Resumen de la configuración

Configurar el R18 para Plaspy garantiza que el dispositivo envíe su ubicación GPS, eventos de alarma y telemetría al endpoint de Plaspy, de modo que los activos y vehículos sean visibles en la plataforma. El objetivo del proceso es apuntar el rastreador a Plaspy, verificar la conectividad celular y confirmar que el dispositivo aparece en la lista y en el mapa de Plaspy.

- Configure el rastreador para que reporte al endpoint del servidor de Plaspy y así los datos de ubicación y eventos lleguen a la plataforma.
- Verifique la conectividad celular y los ajustes APN en el R18 para que se puedan establecer sesiones de datos.
- Seleccione el protocolo de transporte (UDP o TCP) si el equipo lo requiere y configure el puerto compartido de Plaspy.
- Aplique y guarde los cambios en la configuración del dispositivo y reinícielo si es necesario para activar los ajustes.
- Valide que el dispositivo aparece en Plaspy y que se reciben actualizaciones de posición y eventos de alarma.

## Ajustes del servidor Plaspy

Al configurar el R18 para que funcione con Plaspy, utilice los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y confía en la detección automática de protocolo para manejar diferentes protocolos de rastreadores.

## Requisitos típicos antes de la configuración

- Una unidad R18 alimentada y funcional con el cableado y conectores requeridos instalados.
- Una SIM celular activa con plan de datos y el APN correcto configurado para el operador en uso.
- Acceso al método de configuración oficial de GOTOP para el R18 (aplicación del fabricante, herramienta web o comandos SMS).
- Conocimiento de la versión de firmware del dispositivo y de cualquier comportamiento de las herramientas del proveedor que afecte la configuración.
- Una ruta de prueba corta o una ubicación de prueba estacionaria para validar el bloqueo GPS y la visibilidad del dispositivo en Plaspy.
- Credenciales o acceso a la cuenta de la instancia de Plaspy donde se registrará y monitoreará el dispositivo.

## Cómo se conecta este rastreador a Plaspy

El R18 envía actualizaciones de ubicación periódicas y mensajes de eventos a través de su enlace celular al endpoint y puerto del servidor de Plaspy. Plaspy ingiere esos mensajes, normaliza la telemetría y la información de alarmas, y los presenta en mapas, alertas e informes para los equipos de operaciones y seguridad.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según el método de configuración del R18 y la preferencia del instalador.
- Se reenvían a Plaspy la ubicación GPS, eventos de alarma (SOS, geocerca, corte de energía, exceso de velocidad, etc.) y la telemetría de estado.
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador para su correcto parseo.
- Una vez reportando, el R18 queda visible en Plaspy para seguimiento en tiempo real, reproducción histórica y alertas de eventos.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del GOTOP R18 o al software proporcionado por el fabricante o proveedor.
2. En las pantallas de configuración del dispositivo o en la interfaz de comandos, proporcione el servidor de Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los equipos.
4. Elija UDP o TCP si el R18 requiere seleccionar un protocolo de transporte.
5. Guarde o aplique los cambios de configuración en la herramienta del fabricante.
6. Reinicie el dispositivo si las instrucciones del proveedor lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo informa a Plaspy revisando la lista de dispositivos, la posición en el mapa y los registros de eventos en la plataforma.

## Ejemplos de comandos de configuración

El R18 puede configurarse mediante las herramientas de GOTOP o interfaces del proveedor y los comandos exactos o cadenas SMS pueden variar según el firmware y la variante regional. Dado que las herramientas del fabricante y el firmware difieren, consulte la guía de configuración oficial de GOTOP o la lista de comandos suministrada por el proveedor para la sintaxis exacta de los comandos. Si utiliza SMS o una herramienta de terminal proporcionada por GOTOP, use la documentación del fabricante para los formatos precisos.

Si cuenta con ejemplos de comandos suministrados por el proveedor, aplíquelos en el orden recomendado por GOTOP e incluya los ajustes de servidor tal como se muestran en la sección Ajustes del servidor Plaspy arriba.

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar los comandos de configuración disponibles y la ubicación de los menús; siempre verifique la versión de firmware antes de seguir una guía.
- Elegir TCP frente a UDP puede afectar las características de entrega; UDP es común para reportes de posición livianos, mientras que TCP puede usarse donde se prefiera entrega garantizada y esté soportado.
- Mantenga validados el APN del dispositivo y el estado de la SIM antes de probar la conectividad con Plaspy para evitar falsos negativos durante la validación.
- Las herramientas de instalación de GOTOP pueden proporcionar un comando de prueba o latido que puede usar para confirmar que el rastreador alcanza d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Documente el IMEI del dispositivo y los datos del vehículo o activo asignado al añadir el rastreador a Plaspy para facilitar la incorporación y la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP R18 con Plaspy ofrece a las organizaciones una forma directa de recopilar ubicación GPS, alarmas y telemetría desde un rastreador compacto y robusto diseñado para vehículos y activos. Apuntar el R18 a Plaspy permite visibilidad continua, alertas de eventos e informes históricos que respaldan operaciones de flotas, procesos antirrobo y casos de uso de monitoreo remoto.

Para obtener más información sobre Plaspy, visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware y detalles del fabricante más recientes, verifique la información de configuración en el sitio de GOTOP https://www.gotop.cc/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
