---
slug: /topfly/solarguardx_110/protocol
id: solarguardx_110-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 110 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TopFly SolarGuardX 110 integration with Plaspy including connection settings and compatibility considerations
keywords:
  - TopFly SolarGuardX 110 protocol
  - SolarGuardX 110 GPS protocol
  - TopFly tracker communication
  - SolarGuardX 110 Plaspy compatibility
  - GPS tracker protocol guide
  - asset tracking protocol TopFly
  - Solar powered GPS tracker protocol
  - Plaspy device connection
  - tracker reporting protocol
  - fleet tracking protocol TopFly
---

# TopFly - SolarGuardX 110 Protocol

This page documents the public protocol context for using the TopFly SolarGuardX 110 tracker with Plaspy. It focuses on how the device communicates at a high level with Plaspy servers, and what integrators and fleet managers should know to configure reporting and validate connectivity without exposing internal or sensitive protocol internals.

The SolarGuardX 110 is a rugged solar augmented GPS padlock designed for long term outdoor asset security and telemetry. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact on device behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer documentation when you need firmware specific details.

## Protocol Overview

The protocol used by the SolarGuardX 110 enables the tracker to identify itself to a server, transmit position and telemetry, and deliver event driven alarms and buffered logs for later upload. On a platform level Plaspy ingests those messages to provide visualization, alerts, and historical reporting without requiring manual protocol selection for most devices.

- Enables the device to report GNSS positions and telemetry such as battery state and sensor events to a backend service.
- Carries event notifications for anti theft and operational alerts including movement, rope cut, and lock actions.
- Supports buffered logging so stored points are uploaded after network recovery for continuous history.
- Allows remote management commands and firmware update triggers via network transport where supported.
- Provides the transportable data Plaspy needs to display location, trigger rules, and generate reports.

## How Plaspy Detects the Protocol

Plaspy accepts incoming device connections on a single shared endpoint and automatically identifies incoming tracker messages so users typically do not need to pick a protocol manually when the device is configured to report to Plaspy. Proper device reporting configuration to the Plaspy endpoint is the primary requirement for automatic detection to work.

- Plaspy listens on a shared server endpoint for all supported devices at d.plaspy.com and at the public server address 54.85.159.138 using port 8888.
- The platform automatically detects the tracker reporting protocol once the device is sending data to the Plaspy endpoint.
- In many cases users only need to configure the device to point to the Plaspy domain or IP and the correct transport to begin reporting.
- If a device supports multiple transports, choose the transport consistent with your deployment and carrier support.
- Plaspy logging and server side diagnostics help confirm successful protocol detection and initial message receipt.

## Transport and Connection Context

The SolarGuardX 110 can use different network transports depending on carrier and firmware. When integrating with Plaspy you should configure the device to report to the Plaspy endpoint using a supported transport and verify that network policies allow outbound device traffic to the Plaspy server.

- The device may be configured to use UDP or TCP on port 8888 depending on device settings and carrier configuration.
- Devices can point to the Plaspy domain d.plaspy.com or the public server address 54.85.159.138 for reporting.
- Plaspy uses the same port for all devices which simplifies configuration and firewall rules.
- Choose UDP for lower overhead reporting or TCP where reliable session delivery is preferred and supported by the device.
- Confirm mobile carrier APN and firewall settings allow connections from the tracker to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can alter reporting intervals, available telemetry fields, and transport choices; always confirm firmware level when diagnosing compatibility.
- Hardware revisions sometimes change GNSS or sensor capabilities which can affect what data is reported to Plaspy.
- Manufacturer presets or provisioning services may default to different transports or endpoints; verify device configuration before deployment.
- When switching transport types review device documentation to understand retained session and buffer behavior.
- Some advanced features such as BLE sensor forwarding, remote unlock, or FOTA depend on firmware and carrier support and may require additional configuration.
- Validate any optional encryption or authentication settings with both manufacturer guidance and Plaspy documentation.

## Why Protocol Understanding Matters

Understanding how the SolarGuardX 110 communicates helps accelerate setup, avoid common connectivity pitfalls, and support long term reliability in a Plaspy deployment. Clear knowledge of transport choices, buffering behaviors, and event reporting reduces downtime and simplifies troubleshooting.

- Speeds initial deployment by ensuring correct endpoint and transport configuration to Plaspy.
- Helps pinpoint connectivity issues such as carrier blocks, APN misconfiguration, or firewall restrictions.
- Informs expectations for buffered data upload and how historical points will appear in Plaspy after offline periods.
- Supports planning for power and reporting trade offs when configuring high frequency updates versus battery life.
- Enables effective coordination with TopFly for firmware updates and feature enablement that impact Plaspy integration.

## Why Use Plaspy with This Protocol

Using the SolarGuardX 110 together with Plaspy gives organizations continuous visibility into remote assets with a low maintenance, solar augmented tracker optimized for harsh environments. Plaspy ingests position and telemetry from the device to provide mapping, alerts, and historical reporting that supports container security, trailer management, and other asset protection workflows.

To learn more about Plaspy and how it handles device communications and reporting, visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest SolarGuardX 110 device specific protocol and firmware information on the manufacturer site at https://www.topflytech.com/.
