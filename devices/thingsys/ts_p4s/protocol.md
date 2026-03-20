---
slug: /thingsys/ts_p4s/protocol
id: ts_p4s-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4s Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for ThingSys TS P4s GPS tracker integration with Plaspy server
keywords:
  - ThingSys TS-P4s protocol
  - ThingSys TS-P4s GPS protocol
  - ThingSys TS-P4s protocol for Plaspy
  - TS-P4s tracking protocol
  - TS-P4s Plaspy integration
  - ThingSys GPS tracker protocol
  - TS-P4s telematics compatibility
  - TS-P4s fleet tracking
  - TS-P4s communication protocol
  - ThingSys TS-P4s documentation
---

# ThingSys - TS-P4s Protocol

This page outlines the public protocol context for using the ThingSys TS-P4s tracker with Plaspy. It focuses on how the device communicates in general terms, what information Plaspy expects to receive, and practical considerations when deploying TS-P4s devices for fleet and asset tracking. The TS-P4s is a rugged magnetic tracker with multi constellation GNSS and cellular variants designed for long term deployments and compatibility with mainstream telematics platforms, including Plaspy.

Plaspy uses shared connection settings across supported devices and can automatically detect the tracker protocol when a device reports correctly to the Plaspy endpoint. Exact protocol behavior for the TS-P4s can vary by firmware release, hardware revision, regional variant and manufacturer implementation, so this page provides public facing context rather than firmware specific details.

## Protocol Overview

The TS-P4s communication protocol defines how the device reports GNSS position, timestamps, status, alarms and telemetry to a remote server and how server side commands and acknowledgements are handled in supported modes. For integration with Plaspy the protocol role is primarily to ensure reliable delivery of location and event data so Plaspy can present live maps, alerts and historical reports.

- Enable device identification and session establishment so Plaspy can associate incoming messages with the correct asset.
- Deliver GNSS data, time, movement status and battery telemetry in a consistent, parseable format for Plaspy ingestion.
- Convey alarm and event types such as movement, tamper or low battery so Plaspy can trigger alerts and workflows.
- Support configurable reporting intervals and power modes that affect battery life and server load.
- Use mainstream telematics protocol options commonly supported by the TS-P4s to simplify server side parsing and compatibility.

## How Plaspy Detects the Protocol

Plaspy operates a shared server endpoint that listens for incoming tracker reports and automatically determines the compatible protocol based on the incoming connection and message content. In most deployments you do not need to select a protocol manually in Plaspy when the TS-P4s is configured to report to the Plaspy endpoint.

- Plaspy listens at the server domain d.plaspy.com and the public server IP 54.85.159.138.
- All devices in Plaspy use the same port so outbound device configuration is consistent across models.
- Plaspy uses the shared endpoint and port to accept reports and will auto detect the tracker protocol during normal operation.
- When the tracker is configured to report to Plaspy, the platform typically detects the protocol automatically and associates messages with the correct device record.
- If a device is not detected automatically, reviewing device configuration, APN, transport selection and firmware version on the tracker are common troubleshooting steps.

## Transport and Connection Context

The TS-P4s can be configured to use either UDP or TCP transport depending on the variant and installer preference. For Plaspy deployments the transport and endpoint must be set so the device sends reports to the Plaspy server and port used by the platform.

- Devices may be configured to use UDP or TCP on port 8888 for reporting to Plaspy.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138.
- The port for Plaspy is 8888 and the device may be configured using UDP or TCP on port 8888.
- All devices in Plaspy use the same port which simplifies device side configuration across models.
- Transport selection can affect delivery behavior and retransmission characteristics depending on network conditions and device firmware.

## Protocol Compatibility Notes

- The TS-P4s supports mainstream telematics protocols and configurable reporting which aids compatibility with Plaspy, but supported protocol subsets can vary by firmware and regional variant.
- Firmware and hardware revisions may change event naming, available fields or default reporting intervals, so verify behavior after firmware updates.
- Transport mode selection TCP versus UDP should match what is configured on the device and be allowed by the mobile network and any intermediate firewalls.
- Regional cellular variants (2G, 4G or dual mode) affect network availability and therefore message delivery reliability in different territories.
- Validate device APN and SIM provisioning so the tracker can reach d.plaspy.com or 54.85.159.138 on port 8888.
- When integrating additional sensors or custom telemetry, confirm how those fields are exposed by the device firmware and mapped in Plaspy.

## Why Protocol Understanding Matters

A practical understanding of the TS-P4s communication protocol helps ensure successful setup, reliable operation and more efficient troubleshooting when devices are deployed with Plaspy. Knowing the public protocol context helps operations teams tune reporting, interpret alerts and maintain long term deployments.

- Ensures correct device configuration so messages reach the Plaspy endpoint and are associated with the right asset.
- Helps diagnose connectivity and delivery issues by confirming transport, APN and endpoint settings.
- Enables informed choices about reporting intervals and power modes to balance battery life and positional accuracy.
- Clarifies how alarms and telemetry are presented in Plaspy so alerting and automation rules can be configured correctly.
- Reduces downtime by providing a baseline for what to check when a device stops reporting.

## Why Use Plaspy with This Protocol

Using the TS-P4s with Plaspy provides organizations a straightforward way to combine long life, rugged tracking hardware with a platform that ingests location, alarms and telemetry for visibility and operational oversight. The TS-P4s is well suited to container monitoring, fleet and rental tracking, and covert asset deployments where long unattended operation and reliable reporting are priorities.

To learn more about Plaspy and how the platform can ingest TS-P4s data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior and variant information verify the official ThingSys documentation at https://www.thingsys.com/ as protocol support and device implementation details can change over time.
