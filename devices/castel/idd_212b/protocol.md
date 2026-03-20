---
slug: /castel/idd_212b/protocol
id: idd_212b-protocol
sidebar_label: Protocol
title: Castel - IDD-212B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Castel IDD-212B connectivity with Plaspy server and integration guidance
keywords:
  - Castel IDD-212B protocol
  - Castel IDD-212B GPS protocol
  - Castel IDD-212B communication protocol
  - Castel IDD-212B tracking protocol
  - Castel OBD tracker protocol
  - Plaspy device compatibility
  - Plaspy protocol detection
  - vehicle tracking protocol
  - OBD Bluetooth tracker
  - fleet tracking compatibility
---

# Castel - IDD-212B Protocol

This page provides the public protocol context for using the Castel IDD-212B with Plaspy. It covers how the device’s reported telemetry and diagnostic data relate to a remote tracking endpoint and what to expect when integrating the scanner with Plaspy for vehicle monitoring and analysis. The goal is to explain the communication role of the device without exposing manufacturer private internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol on its server side. For Plaspy integration the public server endpoint is d.plaspy.com and the server IP is 54.85.159.138 on port 8888. Devices used with Plaspy can be configured to send data using UDP or TCP to port 8888, Plaspy uses the same port for all devices, and exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol for the IDD-212B describes how the device’s telemetry and diagnostic readings are packaged and delivered to a remote endpoint so that a back end like Plaspy can interpret and present them. This includes vehicle metrics from the ECU, event reports from the G sensor, and buffered records from the unit’s flash memory when connectivity is intermittent.

- Translates ECU and OBD data such as speed, RPM, temperature, and diagnostic trouble codes into transportable messages
- Reports fuel consumption, mileage, and aggregated sensor events for fleet or vehicle analysis
- Supports local data buffering in the device flash so records can be uploaded after a connection is reestablished
- Enables the device to identify itself and its status to a remote server so that Plaspy can associate incoming messages with the correct vehicle
- Provides event and alarm reporting for sudden movements or impacts detected by the G sensor

## How Plaspy Detects the Protocol

Plaspy’s platform automatically detects the tracker protocol when a properly configured device reports to the shared Plaspy endpoint. Because Plaspy accepts device connections at a single, consistent port and endpoint, manual protocol selection in the Plaspy interface is typically unnecessary when the device is set to report to Plaspy.

- Devices should be configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy supports both UDP and TCP transport on the same port and uses automatic detection for incoming device formats
- When messages arrive at the Plaspy endpoint the platform associates them with the registering device and applies the appropriate handling
- Users generally do not need to choose a protocol inside Plaspy if the tracker is correctly pointing to the Plaspy endpoint and port
- Correct device identification and stable transport make automatic detection and mapping more reliable

## Transport and Connection Context

Network transport and endpoint configuration define the connection context between the IDD-212B and Plaspy. The IDD-212B is a Bluetooth OBD scanner by design, but when used with remote telemetry platforms the data path to Plaspy may involve a network gateway, a cellular modem, or an integration app that forwards device records to the Plaspy server.

- Plaspy accepts connections to port 8888 and the device may be configured to use UDP or TCP on that port
- Targets for reporting can be specified as the Plaspy domain d.plaspy.com or the server IP 54.85.159.138
- All devices supported by Plaspy use the same port, simplifying endpoint configuration
- The IDD-212B’s local Bluetooth connectivity to phones or tablets is separate from the network path used to send records to Plaspy
- Flash storage in the IDD-212B can retain records so uploads can occur after a network link is available

## Protocol Compatibility Notes

- Firmware versions can change message content, field ordering, or available telemetry fields; verify firmware specifics for precise behavior
- Hardware revisions or different SKUs of the IDD-212B may expose variant features such as additional sensors or altered reporting modes
- Transport selection (UDP versus TCP) affects delivery semantics; choose the option supported by the forwarding gateway or integration path
- Local Bluetooth behavior and smartphone app integrations do not automatically imply direct server reporting; confirm how data is forwarded to Plaspy
- Flash memory and buffering behavior influence how delayed uploads appear on the server after reconnection
- Always validate device configuration against the manufacturer documentation when mapping device fields to Plaspy data fields

## Why Protocol Understanding Matters

Understanding how the IDD-212B communicates helps ensure reliable data flow, correct interpretation of vehicle metrics, and efficient troubleshooting when records do not appear as expected on Plaspy. Awareness of transport and firmware differences reduces setup time and prevents misconfiguration.

- Ensures the device is pointed to the Plaspy endpoint and using the correct transport mode
- Helps map OBD and sensor fields to Plaspy data columns and event types for accurate reporting
- Aids troubleshooting when data is missing, delayed, or when events are not reported as expected
- Clarifies the role of flash buffering so historical records are not mistaken for live telemetry
- Supports planning for firmware updates and hardware changes that may alter message content

## Why Use Plaspy with This Protocol

Using Castel IDD-212B data with Plaspy provides organizations with centralized visibility into vehicle diagnostics, fuel use, mileage trends, and impact events. When the device is configured to forward telemetry to Plaspy’s server endpoint, fleet managers and technicians can view historical records stored by the unit alongside live reporting to support maintenance, safety, and operational decisions.

To learn more about Plaspy and how it manages device integrations, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so please verify the latest device specific protocol information and firmware notes with the manufacturer at http://www.castelecom.com/.
