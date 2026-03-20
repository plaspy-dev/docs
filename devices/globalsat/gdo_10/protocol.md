---
slug: /globalsat/gdo_10/protocol
id: gdo_10-protocol
sidebar_label: Protocol
title: GlobalSat - GDO-10 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the GlobalSat GDO-10 GNSS disciplined oscillator and how it communicates with Plaspy for timing telemetry and monitoring
keywords:
  - GlobalSat GDO-10 protocol
  - GDO-10 Plaspy compatibility
  - GDO-10 timing telemetry
  - GNSS disciplined oscillator protocol
  - GDO-10 1PPS 10MHz monitoring
  - GlobalSat timing device Plaspy
  - GDO-10 communication protocol
  - Plaspy device integration
  - GNSS time synchronization protocol
  - GDO-10 telemetry compatibility
---

# GlobalSat - GDO-10 Protocol

This page provides public protocol context for using the GlobalSat GDO-10 with Plaspy. It focuses on how the GDO-10, an OCXO based GNSS disciplined oscillator with high accuracy 1PPS and phase locked 10 MHz outputs, can be integrated into a telemetry and monitoring workflow that reports timing health and synchronization metrics to Plaspy. Content here is intended to explain the communication role of the device in a Plaspy deployment without exposing private implementation details.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when a device is properly configured to report to the Plaspy endpoint. Exact protocol behavior and telemetry details can vary by firmware version, hardware revision, and manufacturer implementation, so practical integration typically combines the GDO-10 hardware outputs with a monitoring gateway or telemetry adapter that forwards status to Plaspy.

## Protocol Overview

The GDO-10 communicates timing and health information to a monitoring gateway or telemetry interface; that gateway in turn forwards standardized telemetry to Plaspy. In this arrangement the public protocol context describes how the device identifies itself, reports status, and supplies the timing signals that are translated into meaningful metrics by a monitoring adapter and then sent to Plaspy.

- The protocol role is to represent lock state, antenna health, and timing quality for ingestion by a telemetry gateway connected to Plaspy.
- Identifiers and status fields provided by the GDO-10 allow Plaspy to present device health and synchronization quality on dashboards.
- The protocol enables periodic reporting of diagnostic metrics that help operators verify GNSS lock, 1PPS integrity, and 10 MHz reference condition.
- Protocol-level reporting is typically performed by an intermediate device or gateway that bridges the GDO-10 outputs into Plaspy compatible telemetry messages.
- Plaspy uses reported metadata to correlate timing endpoints with other monitored assets and generate alerts when synchronization deviates from expected thresholds.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming telemetry from many device types on a shared Plaspy endpoint and automatically detect the device protocol when the device is pointed at the Plaspy server. For GDO-10 integrations this means operators usually do not need to select a protocol inside Plaspy manually if the telemetry gateway or adapter is correctly configured to forward the GDO-10 status to the Plaspy endpoint.

- Plaspy receives device telemetry at a common server endpoint and uses that single entry point for protocol detection.
- When telemetry arrives at the shared endpoint, Plaspy matches incoming messages to known device behaviors and presents the data without requiring manual protocol selection.
- Ensure your telemetry gateway or adapter forwards the GDO-10 status to the Plaspy endpoint to let automatic detection work as intended.
- If a device is not being detected automatically, verify endpoint settings on the gateway and consult manufacturer documentation for any firmware specific reporting modes.
- Automatic detection simplifies onboarding for mixed deployments that include timing endpoints like the GDO-10 alongside traditional asset trackers.

## Transport and Connection Context

Connection context describes how telemetry from the GDO-10 is delivered to Plaspy by a gateway or adapter. Plaspy publishes a shared network endpoint that supported devices and gateways can target so telemetry is routed into your Plaspy account and automatically processed.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138.
- The Plaspy endpoint accepts device telemetry on port 8888 and that same port is used for all devices supported by Plaspy.
- Devices or gateways may be configured to use either UDP or TCP on port 8888 depending on hardware capability and deployment needs.
- Using the Plaspy domain name d.plaspy.com is recommended, but pointing telemetry to the server IP address is also possible in constrained environments.
- Confirm transport method and port settings on your telemetry gateway to ensure reliable forwarding of GDO-10 status to Plaspy.

## Protocol Compatibility Notes

- Firmware differences on the GDO-10 can change which telemetry fields are available or how status is reported; validate with the device firmware release notes.
- Hardware revisions and optional interface modules may alter the set of available monitoring signals or the recommended gateway configuration.
- Manufacturer side configuration or regional GNSS settings could impact reported GNSS lock state and should be considered when diagnosing compatibility.
- Choosing UDP versus TCP for transport can affect delivery guarantees and may be constrained by the gateway or network environment.
- Always verify which signals your monitoring gateway can read from the GDO-10 and how those signals are mapped into telemetry messages sent to Plaspy.
- For final deployment, confirm compatibility and recommended settings against GlobalSat documentation and any gateway vendor integration guides.

## Why Protocol Understanding Matters

Understanding the communication protocol and how the GDO-10 reports status helps ensure reliable setup, accurate monitoring, and faster troubleshooting when using Plaspy. Even though the GDO-10 provides stable timing outputs, the telemetry path and reporting behavior determine how well those signals are represented in your Plaspy dashboards.

- Clear expectations about reported fields speed up integration and reduce trial and error when mapping telemetry items.
- Protocol familiarity helps operators choose appropriate transport and gateway settings for resilient data delivery.
- Knowledge of firmware dependent behavior helps in interpreting changes to reported metrics after device updates.
- Better understanding reduces mean time to resolution for synchronization alarms and supports repeatable deployments across sites.
- Awareness of protocol limitations informs design choices for redundant timing monitoring and local fallback strategies.

## Why Use Plaspy with This Protocol

Using the GDO-10 with Plaspy brings precision timing visibility into a centralized telemetry platform. Organizations that require consistent GNSS disciplined timing across networks, test labs, or infrastructure sites benefit from combining the GDO-10’s high stability outputs with Plaspy’s ability to ingest, correlate, and present synchronization health alongside other monitored assets.

Plaspy helps you track lock status, antenna health, and timing quality as part of a unified operational view. To learn more about integrating timing endpoints and telemetry gateways with Plaspy, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information on the manufacturer site https://www.globalsat.com.tw/.
