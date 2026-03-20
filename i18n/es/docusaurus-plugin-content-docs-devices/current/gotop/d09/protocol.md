---
slug: /gotop/d09/protocol
id: d09-protocol
sidebar_label: Protocol
title: GOTOP - D09 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar GOTOP D09 con Plaspy y lograr rastreo seguro de activos y telemetría
keywords:
  - protocolo GOTOP D09
  - protocolo GPS GOTOP D09
  - comunicación GOTOP D09
  - protocolo de rastreo GOTOP D09
  - rastreador GOTOP Plaspy
  - rastreador de activos D09
  - compatibilidad D09 Plaspy
  - rastreo en tiempo real GOTOP D09
  - notas de firmware GOTOP D09
  - conectividad GOTOP D09
---

# GOTOP - Protocolo D09

Esta página ofrece contexto público sobre el protocolo para usar el rastreador de activos GOTOP D09 con la plataforma Plaspy. Resume de manera no sensible cómo el dispositivo se comunica con Plaspy, las opciones de conexión habituales para el reporte y consideraciones prácticas para una integración y resolución de problemas exitosas. La información está pensada para gerentes de flota, integradores y equipos técnicos que planean desplegar dispositivos D09 para alimentar a Plaspy con datos de ubicación y eventos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las características disponibles pueden variar según el firmware, las revisiones de hardware y la implementación del fabricante, por lo que esta página se enfoca en hechos públicos y neutrales, mientras recomienda verificar la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo de reporte del D09 permite que el rastreador transmita posición, estado y eventos de alarma a Plaspy para que la plataforma muestre la ubicación en tiempo real, dispare alertas y almacene historial para reproducción. El protocolo gestiona la identificación del dispositivo, reportes periódicos o por eventos, y reportes de estado que Plaspy convierte en telemetría y alertas útiles para operaciones y seguridad.

- Transporta la identidad del dispositivo y la ubicación para que Plaspy pueda asociar los mensajes con el activo o vehículo correcto.
- Entrega actualizaciones periódicas de ubicación y mensajes por eventos como movimiento, caída o batería baja.
- Envía telemetría que Plaspy mapea a funciones de la plataforma como seguimiento en vivo, reproducción de historial y reglas de alerta.
- Admite métodos alternativos de reporte que el fabricante ofrezca, por ejemplo SMS para enlaces rápidos de ubicación cuando sea necesario.
- Funciona con la canalización de ingestión de Plaspy para que los mensajes del D09 se conviertan en eventos accionables en paneles y notificaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador que utiliza el dispositivo. Cuando un D09 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente al servidor de Plaspy.

- Plaspy escucha en un endpoint común para que los dispositivos reporten, lo que simplifica la configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP del servidor 54.85.159.138 para reportar.
- Plaspy utiliza el puerto 8888 para conexiones entrantes de rastreadores; este mismo puerto se emplea para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint compartido y enruta los datos al flujo de procesamiento correspondiente.
- Normalmente usted configura el dispositivo para que reporte al endpoint de Plaspy y permite la detección automática para asociar el dispositivo a una cuenta Plaspy.

## Transporte y contexto de conexión

El transporte influye en cómo el D09 entrega los mensajes a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según la opción de hardware y firmware seleccionada al desplegarlo. En todos los casos Plaspy espera que los dispositivos reporten al endpoint común usando el mismo puerto para que el enrutamiento y la detección sean consistentes entre tipos de dispositivos.

- El D09 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP directa del servidor 54.85.159.138 como endpoint de reporte.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que simplifica la configuración y la resolución de problemas a nivel de flota.
- Elija UDP cuando la menor latencia y la entrega simple de paquetes se ajusten al caso de uso, o TCP cuando la fiabilidad de conexión y el orden de los mensajes sean requeridos por el firmware del dispositivo.
- La accesibilidad de la red, la configuración de APN y la cobertura del operador para 2G o 4G afectan el éxito del canal de transporte; verifique esos ajustes de red durante el despliegue.

## Notas de compatibilidad del protocolo

- Variaciones de firmware entre unidades D09 pueden cambiar qué características de reporte están disponibles o cómo se formatean los mensajes.
- Revisiones de hardware o conjuntos de funciones opcionales (por ejemplo, diferentes módulos de batería) pueden afectar los modos de energía y el comportamiento de reporte asociado.
- Ajustes del fabricante o APN preconfigurados pueden alterar cómo el dispositivo inicia una sesión hacia el endpoint de Plaspy.
- La elección del transporte (UDP vs TCP) debe validarse frente al número de build de firmware instalado en el dispositivo.
- Verifique siempre los parámetros de reporte del dispositivo y los comandos disponibles en la documentación oficial de GOTOP para el modelo y la revisión de firmware exactos.
- Los respaldos por SMS o mecanismos alternos de la plataforma pueden ser útiles durante la configuración inicial o en entornos con cobertura de datos intermitente.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del D09 ayuda a garantizar una configuración inicial confiable, un comportamiento de alertas predecible y una resolución de problemas más sencilla cuando los dispositivos se desvían de los patrones esperados. Familiarizarse con el contexto de comunicación reduce el tiempo de despliegue y favorece la estabilidad operativa a largo plazo.

- Facilita la configuración correcta del dispositivo para que los activos reporten al endpoint de Plaspy sin necesidad de selección manual de protocolo.
- Ayuda a diagnosticar problemas de conectividad al acotar si el inconveniente es de transporte, servidor o firmware del dispositivo.
- Permite tomar decisiones sobre gestión de energía e intervalos de reporte que afectan la vida útil de la batería y la puntualidad de las alertas.
- Garantiza que los mensajes de alarma y telemetría se mapeen correctamente a reglas de alerta y widgets del panel de Plaspy.
- Hace más segura la gestión de cambios de firmware al identificar dónde puede variar el comportamiento tras una actualización.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D09 con Plaspy ofrece una solución práctica para organizaciones que requieren rastreo de activos resistente y discreto, combinado con visibilidad a nivel de plataforma, alertas y reproducción de historial. Los modos de posicionamiento múltiples del D09 y su carcasa robusta son adecuados para diversos escenarios de protección de activos, mientras Plaspy centraliza la telemetría entrante en paneles, notificaciones y trazas históricas para obtener información operativa.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración en la plataforma y le permiten poner en línea dispositivos D09 más rápido. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los detalles de protocolo específicos del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en https://www.gotop.cc/ ya que las características y las revisiones de firmware pueden cambiar con el tiempo.
