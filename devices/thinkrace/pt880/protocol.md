---
slug: /thinkrace/pt880/protocol
id: pt880-protocol
sidebar_label: Protocol
title: ThinkRace - PT880 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ThinkRace PT880 and how it communicates with Plaspy
keywords:
  - ThinkRace PT880 protocol
  - ThinkRace PT880 GPS protocol
  - PT880 Plaspy compatibility
  - PT880 tracking protocol
  - ThinkRace tracker protocol
  - wrist GPS tracker protocol
  - wearable GPS communication
  - Plaspy device compatibility
  - electronic monitoring protocol
  - PT880 communication protocol
---

# ThinkRace - PT880 Protocol

This page describes the public communication context for using the ThinkRace Traxbean Bracelet PT880 with Plaspy. It focuses on how the PT880 reports location and event data to Plaspy in general terms, the connection endpoints Plaspy exposes, and practical compatibility considerations for integration and field deployment.

The PT880 is a purpose built wrist GPS tracker that combines GPS positioning with assisted Wi Fi, cellular triangulation and RF based indoor positioning, plus tamper detection and SOS features. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review device settings and firmware notes when preparing units for production use.

## Protocol Overview

At a high level the PT880 communicates telemetry and event information to a remote server using the device reporting protocol implemented by ThinkRace. That protocol is responsible for packaging position fixes, alarms, tamper events and status updates so a backend such as Plaspy can ingest and display the information for real time supervision and historical reporting.

- Enables the tracker to identify itself and send periodic or event driven location updates to the backend.
- Reports tamper alerts, SOS activations, and device status so supervisors receive actionable events.
- Sends assisted positioning inputs such as Wi Fi and cellular fixes to improve location availability indoors.
- Provides the telemetry stream that Plaspy ingests for live maps, alerts, and audit logs.
- Works over the device transport layer so Plaspy can accept incoming connections from many tracker models.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a single shared endpoint and port and automatically detects the tracker protocol used by incoming devices. When a PT880 is configured to report to the Plaspy endpoint, the platform matches the incoming data to a compatible protocol parser so manual protocol selection is typically not required.

- Plaspy exposes the shared server endpoint d.plaspy.com for device reporting.
- The Plaspy server is reachable at the public IP 54.85.159.138 for devices that prefer numeric addressing.
- All devices supported by Plaspy use the same port 8888 for reporting.
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint.
- In most cases users only need to configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888; Plaspy handles the rest.

## Transport and Connection Context

The PT880 can be configured to report to Plaspy using the transport method supported by the unit and the operator. Depending on configuration and firmware the tracker may use UDP or TCP to send its telemetry stream to the Plaspy endpoint on the common port. Understanding the transport options helps with network planning and firewall configuration.

- Devices may be pointed to the domain d.plaspy.com or directly to the IP 54.85.159.138.
- The shared reporting port for Plaspy is 8888 and is used for all supported devices.
- The PT880 may be configured to use either UDP or TCP on port 8888 depending on firmware and regional variant.
- Network permissions and carrier settings should allow outbound connections to the Plaspy endpoint on port 8888.
- Using the correct transport and endpoint helps ensure timely delivery of alarms and SOS events to Plaspy.

## Protocol Compatibility Notes

- Firmware revisions can change behavior such as event frequency, transport preference, or available telemetry fields; validate firmware level before large deployments.
- Hardware variants or regional models may implement different cellular bands or radio behavior that affect reporting reliability.
- Manufacturer side settings or remote configuration services from ThinkRace can alter how the device reports to a backend.
- Choice of UDP versus TCP can affect delivery semantics for critical events like SOS or tamper alarms; select transport consistent with your operational requirements.
- Always verify that device configuration points to d.plaspy.com or 54.85.159.138 on port 8888 to allow automatic detection by Plaspy.
- Test a small number of units in representative network conditions before rolling out to production to confirm compatibility.

## Why Protocol Understanding Matters

Knowing how the PT880 communicates helps administrators and integrators set up devices correctly, diagnose connectivity issues faster, and maintain reliable supervision over time. A practical understanding minimizes configuration errors and speeds incident response.

- Ensures devices are configured to report to the correct Plaspy endpoint and port for automatic detection.
- Helps narrow troubleshooting to network, SIM, or firmware causes when telemetry is missing.
- Guides decisions about transport selection and firewall rules to protect timely delivery of alerts.
- Supports planning for firmware updates or field replacements that may alter protocol behavior.
- Improves confidence that tamper, SOS, and location events will arrive intact at the Plaspy backend.

## Why Use Plaspy with This Protocol

The PT880 is designed for continuous person centric monitoring and when paired with Plaspy it delivers a practical supervision solution for community corrections, workforce safety, and other applications that require reliable wearable telemetry. Plaspy ingests PT880 location and event streams so supervisors can view live positions, receive alarms, and analyze historical traces in one platform.

Plaspy simplifies device configuration by using a single shared endpoint and port for all devices and by automatically detecting the tracker protocol once a device is pointed to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about Plaspy and how it can support workflows with the PT880 visit https://www.plaspy.com. For the latest device level protocol details, firmware notes, and manufacturer documentation verify information at the official ThinkRace site https://www.thinkrace.com/ as protocol support and firmware behavior can change over time.
