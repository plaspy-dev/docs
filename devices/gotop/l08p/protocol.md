---
slug: /gotop/l08p/protocol
id: l08p-protocol
sidebar_label: Protocol
title: GOTOP - L08P Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for GOTOP L08P and how the device communicates with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - GOTOP L08P protocol
  - GOTOP L08P GPS protocol
  - GOTOP L08P Plaspy
  - GOTOP L08P communication
  - GOTOP L08P tracking protocol
  - GOTOP wearable tracker protocol
  - GPS tracker protocol Plaspy
  - L08P telemetry compatibility
  - GOTOP L08P health telemetry
  - GOTOP L08P device integration
---

# GOTOP - L08P Protocol

This page describes the public protocol context for using the GOTOP L08P smartwatch tracker with Plaspy. It focuses on how the device communicates with Plaspy in general, the role of the tracker reporting protocol for telemetry and alarms, and the connection settings needed for a Plaspy deployment. It does not provide proprietary parsing logic or firmware internals but summarizes the practical communication context needed for integration and troubleshooting.

The L08P is a Plaspy compatible 4G GPS smartwatch designed for continuous location and health telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are configured to report to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so verify device specific details with factory documentation when required.

## Protocol Overview

In public terms the tracker protocol is the set of network rules the L08P uses to identify itself, send location and health telemetry, and deliver alarms to a monitoring platform like Plaspy. The protocol governs how the watch reports GNSS positions, sensor telemetry, SOS events, and status updates so Plaspy can record events, display location history, and trigger notifications.

- Enables periodic and event driven reporting of GNSS position and health telemetry to a server
- Carries device identity and status information so Plaspy can associate data with a specific unit
- Transports alarm and emergency events such as SOS and low battery to monitoring dashboards
- Supports telemetry streams for heart rate, SpO2, motion events, and other sensor data
- Works over common transports so the device can report via cellular or WiFi into Plaspy

## How Plaspy Detects the Protocol

Plaspy automatically detects the tracker protocol when an L08P is configured to report to the Plaspy endpoint. In most deployments the user configures the device to send its reports to the shared Plaspy server address and port, and Plaspy matches incoming traffic to a protocol handler. Manual protocol selection inside Plaspy is typically not required if the device is correctly pointed at the Plaspy endpoint.

- Plaspy receives tracker reports on its shared endpoint and determines the protocol automatically
- Devices must be configured to report to the Plaspy server address such as d.plaspy.com or the server IP
- All devices in Plaspy use the same port so a single port handles multiple tracker models
- Plaspy supports devices that send data over common transports such as UDP or TCP
- If the device is properly configured to report to Plaspy the platform will associate incoming data with the correct device record

## Transport and Connection Context

The L08P can use multiple network transports depending on configuration and available connectivity. For Plaspy integration, the device may be set to report over UDP or TCP to the Plaspy server on the shared port. Devices can point to the Plaspy server domain or its public IP when DNS is not preferred.

- The Plaspy server domain for device reporting is d.plaspy.com
- Plaspy also accepts connections to the server IP 54.85.159.138
- Plaspy listens on and uses the same port for all supported devices which is 8888
- The device may be configured to use UDP or TCP on port 8888 depending on device support and network conditions
- Use the transport and server address that matches your SIM or network policy and verify the device is configured to report to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available telemetry fields, and optional features
- Hardware revisions or optional sensor packages may add or remove telemetry channels such as ECG or SpO2
- Some deployments prefer TCP for reliable delivery and others prefer UDP for lower overhead depending on network conditions
- Manufacturer configuration menus and provisioning procedures determine how the device is pointed to Plaspy
- Always validate compatibility for a given firmware build and device revision against manufacturer notes
- Plaspy detects many tracker protocols automatically but correct device server settings are required for detection

## Why Protocol Understanding Matters

Understanding the communication protocol helps administrators and integrators set up devices correctly, interpret reports, and respond to connectivity or telemetry issues. A practical appreciation of where protocol behavior can vary reduces time spent troubleshooting and improves long term reliability.

- Ensures devices are configured to send reports to the correct Plaspy endpoint and transport
- Helps diagnose why a device is not appearing in Plaspy or why telemetry is incomplete
- Informs decisions on transport selection and network firewall rules during deployment
- Clarifies which telemetry fields and alarms are available on a given firmware revision
- Supports planning for OTA updates and lifecycle maintenance without interrupting monitoring

## Why Use Plaspy with This Protocol

Using the GOTOP L08P with Plaspy gives organizations and caregivers reliable visibility into location, health telemetry, and emergency events. The L08P provides multi GNSS positioning, BLE and WiFi assisted location, cellular connectivity with eSIM options, and a suite of health sensors that together deliver the telemetry Plaspy consumes for alerts, history, and notifications. Deploying these devices with Plaspy enables centralized incident routing, location playback, and configurable alerts for efficient monitoring and response.

To learn more about Plaspy and how your deployment can use the GOTOP L08P, visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol documentation with GOTOP at https://www.gotop.cc/.
