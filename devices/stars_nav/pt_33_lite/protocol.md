---
slug: /stars_nav/pt_33_lite/protocol
id: pt_33_lite-protocol
sidebar_label: Protocol
title: Stars Nav - PT-33 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for Stars Nav PT 33 Lite and how it communicates with Plaspy for location reports and alerts
keywords:
  - Stars Nav PT 33 Lite protocol
  - Stars Nav PT 33 Lite GPS protocol
  - PT 33 Lite Plaspy integration
  - PT 33 Lite SMS tracker
  - Stars Nav GPS tracker protocol
  - Plaspy compatible trackers
  - personal safety GPS protocol
  - SMS based GPS protocol
  - PT 33 Lite tracking protocol
  - fleet monitoring PT 33 Lite
---

# Stars Nav - PT-33 Lite Protocol

This page describes the public protocol context for using the Stars Nav PT-33 Lite with Plaspy. It focuses on how the PT-33 Lite reports location and events in a way that can be integrated into Plaspy workflows, without exposing private parser logic or firmware internals. The PT-33 Lite is an SMS first personal tracker that provides location reports on demand, panic alerts, motion alerts, and geo-fence and speed notifications suitable for low bandwidth deployments.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly configured to report to the Plaspy intake. Exact protocol behavior and message content can vary by firmware version, hardware revision, or manufacturer implementation, so this page provides public, high level context and practical guidance rather than device firmware specifics.

## Protocol Overview

The protocol for the PT-33 Lite is fundamentally an event and position reporting model based on SMS and call triggered reports, with options to forward those messages into a data intake for mapping and alerting. When integrated into Plaspy, the protocol's role is to deliver identity, location, and event information in a way that Plaspy can surface on maps, timelines, and alert rules.

- Enables the tracker to send identity and location information to a central ingestion point for Plaspy to record and display.
- Carries event types such as panic button alerts, motion and immobility notices, geo-fence triggers, and speed alarms for mapping to Plaspy alerts.
- Supports on demand location requests by call or SMS so position reports arrive when needed without continuous data usage.
- Allows SMS based configuration and reporting that can be forwarded into Plaspy via an SMS gateway or other supported ingestion methods.
- Provides a low bandwidth reporting path for deployments where cellular data is limited or not desirable.

## How Plaspy Detects the Protocol

Plaspy is designed to accept device traffic on a shared endpoint and automatically identify the incoming tracker protocol so customers rarely need to select a protocol manually. If a device or an intermediary service forwards the PT-33 Lite reports to the Plaspy endpoint, Plaspy will associate those messages with the device and surface position and event data.

- Plaspy uses a common server endpoint at d.plaspy.com and the public IP 54.85.159.138 for device ingestion.
- The configured port for Plaspy device intake is 8888 and Plaspy uses this same port for all supported devices.
- Plaspy automatically detects the tracker protocol when the device traffic reaches the Plaspy intake at the shared endpoint and port.
- In many cases, users do not need to set a protocol inside Plaspy if the tracker or SMS gateway is configured to forward reports to the Plaspy endpoint.
- Ensure any intermediary SMS gateway or forwarding rule preserves the originating device identity or unique identifiers so Plaspy can match reports to the correct tracker.

## Transport and Connection Context

Although the PT-33 Lite is SMS first, some deployment patterns forward SMS or enable GPRS style reporting; Plaspy supports common transport choices and a single consistent port for intake. Knowing transport options helps plan integration and troubleshooting.

- The device may be configured to send data to Plaspy using UDP or TCP on port 8888 depending on device or gateway capabilities.
- Devices or gateways can point to the Plaspy server domain d.plaspy.com or the IP address 54.85.159.138 when sending reports to the Plaspy intake.
- Plaspy uses port 8888 for all devices, so transport configuration across devices is simplified and consistent.
- For SMS based trackers like the PT-33 Lite, an SMS gateway or forwarding mechanism is typically used to transform SMS messages into a format Plaspy can ingest over TCP or UDP.
- Confirm whether your deployment uses UDP or TCP and ensure any gateway or firewall rules allow outbound traffic to port 8888 to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware and hardware revisions can change message formats and available features; verify the tracker firmware when assessing compatibility.
- Manufacturer configuration options may vary by region or batch, so features exposed via SMS commands may differ between units.
- SMS first devices often require an intermediary SMS gateway or forwarding method to feed Plaspy; confirm how SMS reports will reach Plaspy in your setup.
- Transport selection between UDP and TCP should match the capability of the gateway or tracker when pointing to d.plaspy.com on port 8888.
- Device identifiers and phone numbers used in SMS reports must be preserved or mapped during forwarding so Plaspy can uniquely identify devices.
- Validate compatibility against the manufacturer documentation for model specific command sets and behavior before deployment.

## Why Protocol Understanding Matters

Knowing how the PT-33 Lite communicates helps ensure reliable setup, correct event mapping into Plaspy, and faster troubleshooting when reports do not appear as expected. Understanding the high level protocol behavior reduces integration time and helps maintain service reliability for safety and monitoring use cases.

- Ensures alerts such as panic button presses, geo-fence violations, and immobility notifications are mapped correctly into Plaspy.
- Helps choose the right forwarding or gateway approach for SMS first devices so position data reaches Plaspy consistently.
- Aids in diagnosing connectivity issues by clarifying whether reports need to be forwarded to d.plaspy.com or to an intermediary service.
- Supports planning for battery and reporting frequency trade offs when using on demand versus scheduled reports.
- Reduces confusion when firmware updates change message phrasing or available event types by focusing troubleshooting on transport and identification.

## Why Use Plaspy with This Protocol

The PT-33 Lite paired with Plaspy offers a practical combination for organizations and families that need dependable, low bandwidth location reporting and safety alerts. Plaspy brings centralized visibility, alerting, and logging for the SMS based position and event reports generated by the PT-33 Lite, making it easier to monitor people or portable assets without continuous data telemetry.

To learn more about how Plaspy works with devices like the PT-33 Lite, visit https://www.plaspy.com. Please verify current device protocol details, firmware behavior, and manufacturer specific information on the official Stars Nav site http://www.starsnav.com/ since protocol support and device behavior can change over time.
