---
id: intellitrack
title: Intellitrack
sidebar_label: Intellitrack
sidebar_class_name: menu_item_brand
description: Cómo integrar dispositivos Intellitrack con Plaspy para rastreo confiable de flotas y activos
keywords:
  - Intellitrack
  - GPS Intellitrack
  - dispositivos Intellitrack
  - rastreador GPS
  - seguimiento de flotas
  - rastreo de vehículos
  - compatible con Plaspy
  - gestión de flotas
  - plataforma de rastreo GPS
  - seguimiento de activos
---

import BrandCatalog from '@site/src/components/Devices/BrandCatalog';
import { brand } from './index.js';

<img src={brand.image} alt="Intellitrack" className="brand-catalog-logo" />

# Intellitrack

Intellitrack fabrica una variedad de dispositivos de rastreo GPS comúnmente utilizados para la monitorización de vehículos y activos. En esta página se explica cómo los dispositivos Intellitrack pueden integrarse con Plaspy, qué funcionalidades puede esperar en términos generales y cómo elegir el modelo adecuado para su implementación. Use el catálogo de dispositivos más abajo para ver modelos compatibles y seguir los enlaces a la documentación específica de cada dispositivo cuando lo requiera.

## Cómo funcionan los dispositivos Intellitrack con Plaspy

Plaspy recibe datos de ubicación y telemetría de los dispositivos Intellitrack ingiriendo las transmisiones GNSS y celulares estándar. Cuando un dispositivo Intellitrack se configura para enviar datos a Plaspy, la plataforma analiza los mensajes entrantes y pone la información de posición, sensores y estado a disposición en la interfaz y las API de Plaspy. La integración suele incluir:

- Configurar el dispositivo para que transmita a la dirección de servidor y protocolo que espera Plaspy.
- Verificar el identificador del dispositivo para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Confirmar los intervalos de reporte y los parámetros de alerta para que coincidan con sus requisitos de seguimiento.

Para los pasos de configuración específicos de cada modelo, consulte la documentación del dispositivo accesible desde el catálogo. Plaspy admite monitoreo, alertas de geocerca, historial de viajes e informes para dispositivos Intellitrack compatibles cuando están correctamente configurados.

## Funcionalidades comunes en los dispositivos Intellitrack

Aunque las características varían según el modelo, muchos dispositivos Intellitrack ofrecen capacidades usadas habitualmente en seguimiento de flotas y activos:

- Reporte de ubicación basado en GNSS para actualizaciones de posición continuas o periódicas
- Conectividad celular para el envío de datos a plataformas en la nube
- Sensores integrados para monitorizar ignición, movimiento y estados de entradas básicas
- Modos de gestión de energía adecuados para despliegues en vehículos y activos
- Opciones básicas de alarma y detección de manipulación

El BrandCatalog que aparece más abajo lista los modelos Intellitrack disponibles que se sabe son compatibles con Plaspy y enlaza a las páginas de cada modelo con detalles técnicos.

<BrandCatalog brand={brand} />

## Casos de uso típicos para rastreadores GPS Intellitrack

Los dispositivos Intellitrack suelen seleccionarse para escenarios como:

- Localización y seguimiento de rutas de flotas de vehículos para mejorar la utilización y la gestión de despachos
- Monitoreo de activos como remolques, maquinaria y mercancías de alto valor
- Flujos de trabajo simples de disuasión y recuperación ante robos mediante historial de ubicaciones y alertas
- Supervisión de equipos de obra y personal de campo donde se requiere hardware compacto y conectividad celular

Plaspy le ayuda a convertir la telemetría del dispositivo en información útil, alertas y reportes para estos casos de uso.

## Por qué elegir Plaspy para el monitoreo de dispositivos Intellitrack

Plaspy ofrece una plataforma de rastreo flexible que acepta telemetría de una amplia variedad de fabricantes de hardware, incluidos modelos Intellitrack. Entre las ventajas de usar Plaspy con dispositivos Intellitrack están:

- Vistas centralizadas de flota y activos en entornos con hardware mixto
- Alertas y geocercas configurables para adaptarse a sus necesidades operativas
- Reproducción histórica de viajes e informes exportables para cumplimiento y análisis
- Opciones de integración mediante API para automatizar flujos de trabajo y conectar sistemas de terceros

Plaspy se enfoca en la ingesta y presentación fiables de los datos del dispositivo, en lugar de sustituir las herramientas de configuración a nivel de hardware. Para detalles de despliegue, revise la página del dispositivo correspondiente y luego finalice los ajustes en Plaspy.

## Ayuda para elegir el dispositivo Intellitrack adecuado

Use el BrandCatalog arriba para explorar los modelos Intellitrack que se integran con Plaspy. Al evaluar modelos, considere:

- Requisitos de conectividad como bandas celulares soportadas y opciones de SIM
- Compatibilidad de la fuente de alimentación con su vehículo o activo
- Entradas y sensores necesarios para la telemetría que desea recopilar
- Factor de forma de montaje y protección ambiental para el uso previsto

Si no está seguro de qué dispositivo se ajusta a sus necesidades, reúna sus requisitos técnicos y compárelos con las especificaciones de los dispositivos enlazadas en el catálogo. Para orientación adicional sobre las funciones de Plaspy y la configuración de cuentas visite el sitio principal en https://www.plaspy.com.

## Preguntas frecuentes

Q: ¿Qué dispositivos Intellitrack son compatibles con Plaspy?
A: La compatibilidad depende del modelo. El BrandCatalog en esta página lista los dispositivos Intellitrack que se sabe funcionan con Plaspy. Haga clic en un modelo del catálogo para ver la documentación y la guía de configuración del dispositivo.

Q: ¿Puedo usar rastreadores GPS Intellitrack con Plaspy?
A: Sí. Muchos rastreadores Intellitrack pueden enviar datos de ubicación y telemetría a Plaspy una vez configurados con los parámetros de servidor e identificador de dispositivo correctos. Consulte la página del modelo específico para los ajustes recomendados.

Q: ¿Plaspy soporta monitoreo de flotas con dispositivos Intellitrack?
A: Plaspy admite monitoreo de flotas y activos impulsado por la telemetría de dispositivos Intellitrack compatibles. Las funcionalidades estándar de la plataforma, como rastreo en tiempo real, historial, alertas e informes, están disponibles para los dispositivos conectados.

Q: ¿Dónde encuentro la documentación de dispositivos Intellitrack en Plaspy?
A: Use el BrandCatalog arriba para escoger un modelo. Cada entrada del catálogo enlaza a una página del dispositivo con pasos de configuración, notas de configuración y referencias técnicas necesarias para conectar ese dispositivo a Plaspy.

Q: ¿Necesitaré cambiar la configuración de la SIM o el plan de datos para usar dispositivos Intellitrack con Plaspy?
A: Normalmente necesita un plan de datos celulares apropiado para uso de telemetría y una SIM compatible con el dispositivo. Los detalles específicos de APN y la configuración del servidor varían según el modelo y se proporcionan en la página del dispositivo dentro del catálogo.

Q: ¿A quién debo contactar para ayuda avanzada con la integración de dispositivos?
A: Para asistencia relacionada con la plataforma, consulte los recursos y la documentación de Plaspy en https://www.plaspy.com. Para problemas específicos de hardware, remítase a los recursos del fabricante en su sitio o a la documentación del dispositivo enlazada en el catálogo.

## Siguientes pasos

Explore los modelos Intellitrack listados en el catálogo arriba para encontrar el rastreador adecuado para su flota o activos. Una vez que seleccione un modelo, siga la página del dispositivo para los pasos de configuración y luego finalize la integración dentro de Plaspy. Para detalles sobre la plataforma, configuración de cuentas y opciones empresariales visite https://www.plaspy.com.
