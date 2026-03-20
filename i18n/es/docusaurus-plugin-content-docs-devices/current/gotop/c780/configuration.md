---
slug: /gotop/c780/configuration
id: c780-configuration
sidebar_label: Configuration
title: GOTOP - C780 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP C780 con los ajustes del servidor Plaspy y flujo práctico
keywords:
  - configuración GOTOP C780
  - instalación GOTOP C780
  - configuración servidor GOTOP C780
  - GOTOP C780 Plaspy
  - configuración rastreador GPS GOTOP
  - configurar rastreador de vehículo Plaspy
  - configuración GPS C780
  - integración rastreador GOTOP
  - seguimiento de flotas C780
  - guía de instalación C780
---

# GOTOP - C780 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS GOTOP C780 con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de trabajo habitual necesarios para apuntar el equipo a Plaspy, de modo que los datos de ubicación y alertas se centralicen para monitoreo, generación de informes y respuesta a incidentes.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, detectando automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información que sigue junto con la documentación de GOTOP para detalles específicos del equipo.

## Resumen de la configuración

Configurar el C780 para Plaspy prepara el rastreador para subir datos de posición y estado a un único endpoint de Plaspy, de modo que los vehículos aparezcan en la plataforma con actualizaciones en tiempo real e historial. El proceso consiste principalmente en establecer la dirección de servidor correcta, el puerto, la opción de transporte y verificar que el dispositivo tenga conectividad móvil operativa.

- Direccione el equipo para que suba telemetría al endpoint del servidor de Plaspy (dominio o IP).  
- Configure el transporte y el puerto para que los paquetes lleguen a Plaspy (UDP o TCP en el puerto compartido de Plaspy).  
- Verifique la SIM y la conectividad de datos móviles para que las subidas GPRS puedan tener éxito; el SMS como respaldo es útil donde esté disponible.  
- Aplique y guarde los ajustes en el rastreador y valide que el dispositivo informe a Plaspy.  
- Confirme que las alarmas y el reporte de eventos (intento de manipulación, corte de alimentación, encendido) sean visibles en Plaspy después del registro del equipo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado: UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Incluya exactamente estos valores al configurar el C780 para asegurar que el dispositivo pueda comunicarse con Plaspy.

## Requisitos típicos antes de la configuración

- Un C780 con alimentación confiable por el cableado del vehículo o fuente de banco de pruebas y batería interna de respaldo cargada si aplica.  
- Una tarjeta SIM activa con datos móviles habilitados para subidas GPRS y capacidad SMS como respaldo.  
- Datos del APN del operador y cualquier autenticación necesaria proporcionada por el proveedor de la SIM para configurar la conexión de datos si el dispositivo lo requiere.  
- Acceso al método de configuración GOTOP apropiado para su unidad, como comandos SMS, la herramienta del proveedor o una interfaz web/USB según lo ofrezca el fabricante.  
- Anote el identificador del dispositivo o IMEI para correlacionar la unidad física con la entrada en Plaspy.  
- Planifique las pruebas en una zona con cobertura donde el rastreador pueda obtener fijaciones GNSS y conectividad GPRS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el C780 envía información de posición y estado al endpoint del servidor Plaspy a través de GPRS. Plaspy ingiere esas subidas para mapeo en vivo, reproducción de historial y alertas. Si el equipo está configurado para enviar posiciones por SMS, esos mensajes pueden servir como respaldo en flujos de trabajo que usan SMS.

- El rastreador se apunta al servidor Plaspy mediante el dominio d.plaspy.com o la IP 54.85.159.138 y se comunica por el puerto 8888.  
- Las subidas del dispositivo (GPRS) usan UDP o TCP según la configuración del equipo y el comportamiento de la red.  
- Plaspy detecta automáticamente el protocolo del dispositivo al recibir la conexión, por lo que no es necesario seleccionar un protocolo por dispositivo en el lado de Plaspy.  
- Eventos como alertas de manipulación, notificaciones de pérdida de energía y cambios de ignición son reenviados a Plaspy cuando el rastreador los informa.  
- El reporte por SMS permanece como canal de respaldo opcional cuando el equipo y el plan de SIM lo permiten.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración GOTOP para el C780 usando la herramienta recomendada por el fabricante, el conjunto de comandos SMS o la interfaz de configuración.  
2. Ingrese el servidor de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 según la interfaz del dispositivo.  
3. Ajuste el puerto a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Elija UDP o TCP si el equipo solicita seleccionar el protocolo de transporte.  
5. Introduzca el APN del operador y cualquier autenticación necesaria para que las subidas GPRS se realicen correctamente.  
6. Aplique o guarde la configuración en el rastreador.  
7. Reinicie el dispositivo si el firmware requiere un reinicio para aplicar los cambios de red.  
8. Valide que el rastreador informe a Plaspy y que las actualizaciones de posición, alertas e historial sean visibles en la plataforma.

## Ejemplos de comandos de configuración

El C780 puede configurarse mediante herramientas del fabricante o comandos SMS según el firmware y las herramientas del distribuidor local. La sintaxis exacta de los comandos y los pasos varían según el firmware de GOTOP y las variantes regionales del equipo, por lo que consulte la guía de configuración de GOTOP para los formatos precisos de comando. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que se configure UDP o TCP si el dispositivo solicita selección de transporte.

Si dispone de ejemplos de comandos SMS o de la herramienta del proveedor en la documentación oficial de GOTOP, colóquelos aquí siguiendo la guía del fabricante y utilice los valores de servidor y puerto indicados arriba. Mantenga marcadores de posición como {{apn}} para la configuración del operador cuando el fabricante los indique.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los pasos exactos de configuración y la sintaxis de los comandos SMS; confirme siempre con la documentación de GOTOP para su unidad.  
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del dispositivo; UDP es común por su menor sobrecarga en telemetría, mientras que TCP puede ser útil donde se necesita confirmación de entrega.  
- Asegúrese de que el plan de la SIM permita datos GPRS y SMS según el método de reporte elegido.  
- Use el dominio d.plaspy.com siempre que sea posible para que Plaspy pueda manejar cualquier cambio de IP en el backend; la IP 54.85.159.138 se proporciona como alternativa directa.  
- Pruebe las alarmas y el reporte de eventos tras la configuración para confirmar que manipulación, pérdida de alimentación e ignición se visualizan en Plaspy.

## Por qué usar Plaspy con esta configuración

Apuntar el GOTOP C780 a Plaspy centraliza actualizaciones de ubicación en tiempo real, alertas de eventos y rutas históricas para que gerentes de flota y propietarios de vehículos puedan monitorear operaciones, responder a incidentes y analizar viajes desde una única plataforma. La combinación de subidas GPRS y respaldo por SMS aporta resiliencia práctica para muchos casos de uso de rastreo vehicular.

Para saber más sobre Plaspy y cómo recibe telemetría del C780, visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica del equipo, notas de firmware y referencias de comandos, consulte al fabricante en https://www.gotop.cc/ ya que la documentación del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
