---
slug: /teltonika/fmc150/protocol
id: fmc150-protocol
sidebar_label: Protocol
title: Teltonika - FMC150 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the Teltonika FMC150 with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - Teltonika FMC150 protocol
  - FMC150 GPS protocol
  - Teltonika FMC150 Plaspy
  - FMC150 communication protocol
  - vehicle GPS tracker protocol
  - FMC150 CAN telemetry
  - Plaspy device compatibility
  - fleet tracking FMC150
  - FMC150 EV telemetry
  - Teltonika tracker protocol
---

# Teltonika - FMC150 Protocol

This page covers the public protocol context for using the Teltonika FMC150 tracker with Plaspy. It explains how the device generally communicates telemetry and CAN-derived vehicle data to Plaspy, and what to check when configuring a deployment. The content focuses on public, non-sensitive protocol context rather than internal packet formats or firmware internals.

The FMC150 is a Plaspy compatible tracker that streams GPS position and rich CAN bus telemetry into Plaspy for fleet monitoring, preventive maintenance, and anti-theft workflows. Plaspy uses a shared endpoint and connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior and available telemetry fields can vary by FMC150 firmware version, hardware revision, regional module option, and manufacturer implementation, so always validate device behavior against Teltonika documentation when needed.

## Protocol Overview

The protocol role for the FMC150 in a Plaspy deployment is to establish a reliable transport channel, identify the device, and deliver structured telemetry that Plaspy can map to dashboards and alerts. This is achieved by the tracker sending periodic and event-driven messages containing GNSS location plus CAN-derived parameters, accessory sensor data, and status fields.

- Enables continuous delivery of GPS location and CAN parameter values from the tracker to Plaspy.
- Provides device identification and status metadata so Plaspy can associate messages with the correct asset record.
- Carries CAN-derived diagnostics such as engine, battery, charging, and EV-specific metrics when configured.
- Supports accessory telemetry from Bluetooth beacons and sensors for proximity and environmental data reporting.
- Allows event reporting for alarms, geofence triggers, and movement or input changes that Plaspy can use for alerts.

## How Plaspy Detects the Protocol

Plaspy receives incoming device messages on a shared endpoint and uses automatic detection to identify the tracker protocol so users typically do not need to select a protocol manually in Plaspy. Proper device configuration to point to Plaspy is the main requirement for successful protocol detection and ingestion.

- Plaspy listens on the shared server endpoint d.plaspy.com and the server IP 54.85.159.138.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol when a device connects.
- The FMC150 can be configured to report directly to the Plaspy endpoint so messages are ingested and mapped to the fleet account.
- If a device is configured correctly, users generally do not need to choose a protocol inside Plaspy for basic message ingestion.
- Detection covers both periodic position reports and event-driven CAN telemetry so Plaspy can surface the data in dashboards and alerts.

## Transport and Connection Context

The FMC150 supports common cellular transports and can be pointed at Plaspy using either a domain name or an IP address. Connection transport choice and device network behavior are controlled by device configuration and the installed firmware, so confirm your FMC150 settings before deployment.

- Devices may be configured to send data over UDP or TCP on port 8888 depending on device support and chosen settings.
- Plaspy accepts connections on port 8888; this is the same port used by all devices supported by Plaspy.
- Trackers can resolve and report to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Network reliability, APN configuration, and regional module variants (4G LTE Cat 1 with 2G fallback) affect transport performance and should be validated in the field.
- If you change transport (UDP vs TCP) on the device, confirm connectivity to the Plaspy endpoint and that messages are arriving in your Plaspy account.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can alter which CAN parameters and telemetry fields are available from the FMC150.
- Regional cellular module variants and network bands may affect connectivity behavior; validate APN and network settings for each SKU.
- Manufacturer configuration tools such as Teltonika configurator and FOTA services can change device defaults and should be referenced for provisioning.
- Transport selection (UDP or TCP) is device-configurable; choose the mode that best fits your network and reliability requirements.
- When integrating advanced CAN parameter sets or EV-specific packages, confirm that the firmware on your device exposes the desired parameters.
- Always validate a sample device end-to-end with Plaspy before large scale rollout to confirm telemetry mapping and behavior.

## Why Protocol Understanding Matters

Understanding how the FMC150 communicates helps ensure reliable setup, efficient troubleshooting, and consistent long-term operation within Plaspy. Knowing the connection context and what the tracker reports reduces configuration errors and speeds resolution of connectivity or data mapping issues.

- Helps verify device reachability to the Plaspy server endpoint and resolve network issues faster.
- Enables correct selection and configuration of transport mode (UDP or TCP) and APN settings for cellular connectivity.
- Aids troubleshooting when telemetry fields expected in Plaspy do not appear due to firmware or parameter package differences.
- Supports planning for mixed fleets and EV deployments by clarifying which CAN parameters are delivered.
- Improves security and operational practices by confirming that devices are pointed at the intended Plaspy endpoint.

## Why Use Plaspy with This Protocol

Combining the Teltonika FMC150 with Plaspy provides organizations with a practical path to unify GPS tracking, CAN bus diagnostics, and accessory sensor data in a single telematics platform. The FMC150’s built-in CAN processing and support for EV parameter packages make it particularly useful where rich vehicle telemetry is required alongside location tracking.

Plaspy’s shared endpoint model simplifies fleet provisioning by using a single host and port for all devices and automatically detecting the tracker protocol so you can focus on workflows rather than manual protocol selection. To learn more about Plaspy, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.teltonika-gps.com/.
