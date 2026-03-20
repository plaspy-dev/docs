---
slug: /aplicom/a11_ble/protocol
id: a11_ble-protocol
sidebar_label: Protocol
title: Aplicom - A11 BLE Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the Aplicom A11 BLE tracker with Plaspy for fleet and asset tracking
keywords:
  - Aplicom A11 BLE protocol
  - Aplicom A11 BLE GPS protocol
  - Aplicom A11 BLE communication
  - A11 BLE tracking protocol
  - Aplicom tracker Plaspy
  - A11 BLE Bluetooth LE
  - fleet tracking protocol
  - vehicle telematics protocol
  - tracker protocol compatibility
  - A11 BLE OTA updates
---

# Aplicom - A11 BLE Protocol

This page describes the public protocol context for using the Aplicom A11 BLE tracker with Plaspy. It explains in general terms how the device communicates with the Plaspy platform, what role the reporting protocol plays in data delivery, and which connection settings are used by Plaspy for receiving telemetry from this model.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when the unit is configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so use this guidance together with the device documentation and firmware notes from Aplicom.

## Protocol Overview

The communication protocol of the A11 BLE lets the device package position, sensor, and status information and transmit it to a remote server so fleet managers and monitoring systems can consume the data. The protocol serves as the contract between the device and Plaspy for delivering usable telemetry and state updates.

- Carries core telematics data such as GNSS position, timestamp, and device status to the server
- Supports transmission of peripheral data collected via Bluetooth LE for sensor and beacon use cases
- Enables identification of the unit so Plaspy can map incoming messages to the correct asset
- Allows configuration and OTA update signaling initiated by the manufacturer tooling or management services
- Facilitates periodic reporting and event driven messages to support location and alert workflows

## How Plaspy Detects the Protocol

Plaspy receives device messages at a shared endpoint and uses that connection to determine the appropriate handling for incoming data. When an A11 BLE is configured to report to Plaspy, the platform will typically identify the correct protocol automatically so you do not need to manually select a protocol inside Plaspy.

- Plaspy server endpoint is d.plaspy.com and also reachable at 54.85.159.138 using the public settings
- Plaspy uses a single port across all supported devices which simplifies device configuration and onboarding
- The A11 BLE can be set to report to the Plaspy endpoint using standard network transport options
- Automatic detection reduces configuration steps for users when the device is correctly pointed at the Plaspy endpoint
- If a device does not appear to connect, verify device reporting settings and firmware compatibility against manufacturer documentation

## Transport and Connection Context

Connection transport and addressing determine how the A11 BLE reaches Plaspy. The device supports common transport modes and can be configured to reach the Plaspy endpoint using either network name or numeric address.

- Devices may use UDP or TCP on port 8888 depending on device support and configuration choices
- Units can be configured to report to the domain d.plaspy.com or to the numeric address 54.85.159.138
- Plaspy accepts connections on the same port for all devices, which simplifies fleet level settings and provisioning
- Choose TCP when reliable delivery and session oriented communication are preferred, or UDP for lower overhead reporting when supported by the device
- Ensure the device APN and cellular connectivity are active when using mobile networks to reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can change available features and message details; validate the device firmware level when diagnosing compatibility
- Hardware revisions or different configuration profiles from the manufacturer may alter supported transports or peripheral handling
- Bluetooth LE data is typically reported through the main device reporting channel; ensure BLE sensors are paired and recognized by the A11 BLE before relying on that data in Plaspy
- Transport selection (UDP vs TCP) should match the device configuration and any network constraints such as firewalls or carrier behavior
- Always confirm the device is pointed at the Plaspy endpoint d.plaspy.com or 54.85.159.138 and using port 8888 to avoid connectivity issues
- Consult Aplicom release notes and configuration guides for device specific behaviors and recommended settings

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure a smooth initial setup, effective troubleshooting, and consistent long term operation of A11 BLE devices on Plaspy. Knowing how the device reports data and how Plaspy expects to receive it reduces configuration errors and shortens resolution time for issues.

- Helps verify the device is sending the expected telemetry fields and identifying correctly in Plaspy
- Guides choices around transport mode, reporting intervals, and power management settings for fleet objectives
- Improves troubleshooting by isolating whether an issue is at the device, network, or server side
- Supports integration of Bluetooth LE sensor data and explains how that data flows from peripheral to server
- Informs when firmware updates or manufacturer changes may require revalidation of settings in Plaspy

## Why Use Plaspy with This Protocol

Using the Aplicom A11 BLE with Plaspy provides a practical path to collect GPS, cellular, and Bluetooth LE based sensor data into a single fleet management platform. For organizations that need visibility across vehicles and assets, the combination of A11 BLE hardware capabilities and Plaspy's unified ingestion simplifies deployment and operational monitoring.

To learn more about Plaspy and how it handles device connectivity and telematics ingestion, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration guidance for the Aplicom A11 BLE, verify information on the manufacturer site https://www.aplicom.com/.
