---
slug: /jointech/jt705a/protocol
id: jt705a-protocol
sidebar_label: Protocol
title: Jointech - JT705A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Jointech JT705A and how it communicates with Plaspy for container tracking and telemetry
keywords:
  - Jointech JT705A protocol
  - Jointech JT705A GPS tracker
  - JT705A Plaspy compatibility
  - Jointech tracker communication
  - container tracker protocol
  - GPS tracking protocol
  - fleet management tracker
  - container monitoring JT705A
  - JT705A integration
  - vehicle tracking protocol
---

# Jointech - JT705A Protocol

This page documents the public protocol context for using the Jointech JT705A with Plaspy. It explains how the device reports container location and status to Plaspy in general, clarifies the shared connection settings Plaspy expects, and highlights the practical considerations for integrating JT705A telemetry into Plaspy workflows.

Plaspy uses a single shared endpoint and port for all devices and automatically detects the tracker protocol when devices report to the platform. In public terms, JT705A units may be configured to send data to d.plaspy.com or to the server IP 54.85.159.138 on port 8888. The device can be set to use UDP or TCP on port 8888 depending on configuration and device support. Exact protocol behavior and message details can vary by firmware version, hardware revision, and manufacturer implementation, so review Jointech documentation for device specific details.

## Protocol Overview

At a high level, the JT705A communication protocol defines how the tracker identifies itself to a remote server, reports periodic position and status updates, and transmits alarm and tamper events. For Plaspy integration the protocol provides the necessary event types and fields so the platform can present location, security, and operational status for container monitoring.

- Enables the JT705A to send location coordinates and timestamped telemetry for real time tracking.
- Carries tamper, unseal, impact, and alarm events that Plaspy surface for alerts and chain of custody workflows.
- Provides device identification and status indicators so Plaspy can correlate messages with a specific asset.
- Supports both periodic reporting and event driven messages to capture ongoing and exceptional conditions.
- Allows transport over standard network sockets so the device can reach Plaspy at the shared endpoint.

## How Plaspy Detects the Protocol

Plaspy listens on a single shared port for incoming device connections and is designed to recognize and accept a variety of tracker reporting formats. When a JT705A is pointed to the Plaspy endpoint the platform will typically identify the device protocol automatically so manual protocol selection inside Plaspy is not normally required.

- Plaspy uses the common server address d.plaspy.com and the server IP 54.85.159.138 as public endpoints for device reporting.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding.
- Devices can connect over TCP or UDP to the shared port; Plaspy accepts both transport types.
- When a JT705A is configured to report to the Plaspy endpoint, the platform attempts automatic detection of the incoming message format.
- Users generally only need to configure the JT705A to point to the correct Plaspy endpoint and transport; Plaspy handles the protocol identification.

## Transport and Connection Context

Connection choices determine how the JT705A delivers messages to Plaspy and can affect delivery reliability and network behavior. Plaspy exposes public connection settings so integrators can configure device reporting accordingly.

- JT705A units may be configured to use UDP or TCP on port 8888 depending on device capabilities and network conditions.
- Devices may target the DNS name d.plaspy.com or the fallback server IP 54.85.159.138 for direct routing.
- Plaspy listens on port 8888 for all supported devices, making the same port universal across device types.
- TCP can offer reliable delivery for important alarm and tamper messages while UDP can reduce overhead for frequent periodic updates where supported.
- Ensure network firewalls and carrier APN settings allow outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can introduce differences in which message types or fields are present; confirm firmware behavior before large deployments.
- Manufacturer configuration menus and provisioning tools may present transport or server settings differently; follow Jointech instructions when pointing devices to Plaspy.
- Some JT705A units may default to a different reporting server or port out of the box and need reconfiguration to d.plaspy.com or 54.85.159.138 on port 8888.
- Choosing TCP versus UDP can change message delivery characteristics; match the transport selection to operational requirements.
- Plaspy automatically detects protocol, but correct device identification and consistent device IDs on the tracker side help avoid duplicate or misattributed records.
- Validate alarm and tamper semantics against Jointech documentation to ensure Plaspy alert mapping matches expected behavior.

## Why Protocol Understanding Matters

Understanding how the JT705A communicates helps ensure reliable tracking, correct alerting, and faster troubleshooting when devices are deployed with Plaspy. Clear knowledge of transport options and server settings reduces onboarding time and supports consistent long term performance.

- Helps ensure devices are pointed to d.plaspy.com or 54.85.159.138 and use the required port 8888 for successful delivery.
- Clarifies whether a unit should use UDP or TCP for the intended operational profile.
- Speeds troubleshooting by narrowing issues to network, transport, or firmware differences rather than platform configuration.
- Ensures tamper, unseal, and alarm events are interpreted correctly by correlating device behavior with Plaspy event types.
- Supports planning for battery life and reporting intervals by understanding how often the tracker will transmit to Plaspy.

## Why Use Plaspy with This Protocol

Using the JT705A with Plaspy brings container-focused telemetry into a centralized fleet management workflow so logistics and security teams gain visibility across assets and routes. Plaspy ingests JT705A position updates, tamper and unseal events, and alarm notifications to provide real time monitoring, historical playback, and actionable alerts that fit into broader operational processes.

If you want to learn more about Plaspy and how it works with devices like the Jointech JT705A, visit https://www.plaspy.com. For the most current device specific protocol and firmware details, verify information on the manufacturer website https://www.jointcontrols.com since protocol support and firmware behavior can change over time.
